import { zodResolver } from "@hookform/resolvers/zod"
import { Input, Button } from "components"
import {SubmitHandler ,useForm} from "react-hook-form"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { LoginSchema, LoginSchemaType } from "schema"
import { RootState, useAppDispatch } from "store"
import { loginThunk } from "store/quanLyNguoiDung"
import { handleError } from "utils"

export const LoginTemplate = () => {
    const { handleSubmit , register , formState:{errors},} = useForm<LoginSchemaType>(
        {
        mode:'onChange',
        resolver: zodResolver(LoginSchema),
        },
        
    )
    console.log('errors',errors)
const dispatch = useAppDispatch()
const navigate = useNavigate()
const {isFetchingLogin}=useSelector((state:RootState) => state.quanLyNguoiDung)
const onSubmit: SubmitHandler<LoginSchemaType> = (value) =>{
  dispatch(loginThunk(value)).unwrap().then(()=>{
    toast.success('Đăng nhập thành công!')
    navigate('/')
  }).catch((err)=>{
    //xử lí action thất bại
    handleError(err)
  })
  console.log(value)
}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-[30px] text-center  font-600 text-white">Đăng nhập</h2>
        <Input label='Tài Khoản'className='mt-16 '  placeholder='Tài khoản'  id='taiKhoan'name='taiKhoan' error={errors?.taiKhoan?.message} register={register}  />
        <Input label='Mật khẩu' className='mt-16'  placeholder='Mật khẩu'  id='matKhau' name='matKhau' error={errors?.matKhau?.message}  register={register}  />
        <Button className="!w-full !h-[50px] !mt-20" htmlType="submit" type="primary" danger loading={isFetchingLogin} >Đăng nhập</Button>
    </form>
  )
}
