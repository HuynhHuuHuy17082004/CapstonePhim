
import { z } from "zod"
export const RegisterSchema = z.object({
    taiKhoan : z.string().nonempty('* Vui lòng nhập tài khoản').min(6,'* Vui lòng nhập tối thiểu 6 ký tự').max(8,'* Vui lòng nhập tối đa 8 ký tự'),
    matKhau : z.string().nonempty('* Vui lòng nhập mật khẩu'),
    email :z.string().nonempty('* Vui lòng nhập email').email(),
    soDT:z.string().nonempty('* Vui lòng nhập số Điện Thoại'),
    maNhom: z.string().nonempty('* Vui lòng nhập mã nhóm'),
    hoTen : z.string().nonempty('* Vui lòng nhập họ tên')



})
export type RegisterSchemaType = z.infer<typeof RegisterSchema>