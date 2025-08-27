import React from 'react'
import { useDispatch } from "react-redux";
import { login,logout } from '../Features/User';


export const Logging = () => {
  const dispatch = useDispatch();
  return (
    <div>
    <button
        onClick={() => {
          dispatch(login({ name: "lievin", age: 20, email: "lievinm635@gmail.com" }));
        }}
      >
        Login
      </button>
      <button onClick={()=>{
        dispatch(logout())
      }}>logout</button>
</div>
  )
}
