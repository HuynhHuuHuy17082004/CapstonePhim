import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import { UserByAccessToken, UserLogin } from "types"
import { getUserByAccessTokenThunk, loginThunk } from "."
import { getAccessToken } from "utils"

type QuanLyNguoiDungInitialState  = {
    accessToken ?: string
    userLogin ?: UserLogin | UserByAccessToken
    isFetchingLogin ?: boolean
}
const initialState : QuanLyNguoiDungInitialState = {
    accessToken : getAccessToken(),  
    isFetchingLogin : false,
}
const quanLyNguoiDungSlice = createSlice({
    name:'quanLyNguoiDung',
    initialState,
    reducers:{
        logOut:(state , action: PayloadAction<string>)=>{
            console.log(action)
            state.userLogin = undefined
            state.accessToken = undefined
            localStorage.removeItem('ACCESSTOKEN   ')
        }
    },//xử lí action đồng bộ
    extraReducers(builder){
        builder
        .addCase(loginThunk.pending,(state)=>{
            state.isFetchingLogin = true
        })
        .addCase(loginThunk.rejected,(state)=>{
            state.isFetchingLogin = false
        })
        .addCase(loginThunk.fulfilled,(state,{payload})=>{
            console.log(payload)
            localStorage.setItem('ACCESSTOKEN',payload.accessToken)
            state.accessToken = payload.accessToken
            state.userLogin = payload
            state.isFetchingLogin = false
        })
        .addCase(getUserByAccessTokenThunk.fulfilled,(state,{payload})=>{
            state.userLogin = payload
        })
        
    },

})
export const {actions:quanLyNguoiDungActions, reducer:quanLyNguoiDungReducer} = quanLyNguoiDungSlice