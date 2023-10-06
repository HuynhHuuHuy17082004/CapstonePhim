
import {  useForm } from "react-hook-form"
import { Input, Button } from "components"
import { useAuth } from "hooks"

import { useEffect } from "react"

// import styled from "styled-components"


export const AccountInfo = () => {
    const{user} = useAuth()
    const{reset,register}=useForm()

    
    
    
    useEffect(()=>{
        reset({
            ...user,
            soDt:user?.soDT
        })
    },[user,reset])
  return (
    <form >
        <p className="text-20 font-600">Thông tin tài khoản</p>
        <Input className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black" label="Tài khoản" register={register} name="taiKhoan"  />
        <Input className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black" label="Họ và Tên" register={register} name="hoTen" />
        <Input className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black" label="Email"register={register} name='email' />
        <Input className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black" label="Số điện thoại" register={register} name="soDt"/>
        <Input className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black" label="Mã nhóm" register={register} name="maNhom" />
        <Input className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black" label="Mã loại người dùng" register={register} name="maLoaiNguoiDung"  />
       <div className="text-right mt-20">

        <Button className="!h-[46px]" type="primary" htmlType="submit" >Hoàn thành chỉnh sửa</Button>
       </div>
    </form>
  )
}



