import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAccessToken, sleep } from "utils";

import { LoginSchemaType } from "schema";
import { quanLyNguoiDungServices } from "services";

export const loginThunk = createAsyncThunk(
    'quanLyNguoiDung/login',
    async(payload: LoginSchemaType,{rejectWithValue})=>{
        try{
            const data = await quanLyNguoiDungServices.login(payload)
            await sleep()
            return data.data.content
        }catch(err){
           return rejectWithValue(err)
        }
    }
)
export const getUserByAccessTokenThunk = createAsyncThunk('quanLyNguoiDung/getUserAccessToken', async (_, {rejectWithValue})=>{
   try{
    const token = getAccessToken()
    if(token){
        const data = await quanLyNguoiDungServices.getUserByAccessToken()
        return data.data.content
    }
   }catch(err){
    return rejectWithValue(err)
   }
}) 