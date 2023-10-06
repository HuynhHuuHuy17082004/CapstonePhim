/* eslint-disable @typescript-eslint/no-unused-vars */
import {RegisterSchema,RegisterSchemaType} from 'schema'
import {SubmitHandler ,useForm } from "react-hook-form"

import { zodResolver } from '@hookform/resolvers/zod'

import { toast } from 'react-toastify'
import { quanLyNguoiDungServices } from 'services'
import { useNavigate } from 'react-router-dom'
import { PATH } from 'Constant'
import {Input} from 'components'
import { handleError } from 'utils'

export const RegisterTemplate = () => {
    const { handleSubmit , register , formState:{errors},} = useForm<RegisterSchemaType>(
        {
        mode:'onChange',
        resolver: zodResolver(RegisterSchema),
        },
        
    )
    console.log('errors',errors)
    const navigate  = useNavigate()
    
    const onsubmit : SubmitHandler<RegisterSchemaType> = async (values) =>{
        try{
            // console.log({values})
        await quanLyNguoiDungServices.register(values)
        toast.success('Đăng ký thành công!')
        navigate(PATH.login)
        } catch(err){
            // console.log(err)
            // toast.error(err?.response?.data?.content)
            handleError(err)
        }
    }
    return (
    
    <form onSubmit={handleSubmit(onsubmit)} className="text-white">
        <h2 className="text-white font-600 text-[30px]">Đăng ký</h2>
        <Input label='Tài Khoản'className='mt-16'  placeholder='Tài khoản'  id='taiKhoan'name='taiKhoan' error={errors?.taiKhoan?.message} register={register}  />
        <Input label='Mật khẩu' className='mt-16'  placeholder='Mật khẩu'  id='matKhau' name='matKhau' error={errors?.matKhau?.message}  register={register}  />
        <Input label='Họ Tên'  className='mt-16'   placeholder='Họ Tên' id='hoTen' name='hoTen' error={errors?.hoTen?.message} register={register} />
        <Input label='Email' className='mt-16'  placeholder='Email ' id='email' name='email' error={errors?.email?.message} register={register}   />
        <Input label='Số ĐT' className='mt-16' placeholder='Số Điện Thoại' id='soDt' name='soDT' error={errors?.soDT?.message} register={register} />
        <Input label='mã Nhóm' className='mt-16' placeholder='Mã Nhóm' id='maNhom' name='maNhom' error={errors?.maNhom?.message} register={register} />
        
        <button className="w-full p-16 bg-red-500 mt-20 text-white rounded-10 ">Đăng ký</button>
    </form>
  )
}
