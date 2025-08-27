import React from 'react'
 import { useSelector } from 'react-redux'

export const Profiling = () => {
   const user=useSelector((state)=>state.user.value)

  return (
    <div className='p-7 top-7 align-top'>
        <h1>Profile information</h1>
        <p>name:{user.name}</p>
        <p>email:{user.email}</p>
        <p>age:{user.age}</p>
    </div>
  )
}
