

export type UserLogin ={
    taiKhoan : string,
    hoTen : string,
    email : string,
    soDT : string,
    maNhom : string,
    maLoaiNguoiDung : 'KhachHang' | 'QuanTri',
    accessToken : string
}
export type UserByAccessToken = Omit<UserLogin,'accessToken'> & {
    thongtinDatVe?: []
    loaiNguoiDung:{
        maLoaiNguoiDung : 'KhachHang' | 'QuanTri'
    }

}