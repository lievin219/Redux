import {createSlice} from '@reduxjs/toolkit'

 const userSlice=createSlice({
    user:"user",
    initialState:{value:{name:"",email:"",age:""}},
    reducers:{
        login:(state,action)=>{

        }
    }
 })
