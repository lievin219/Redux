import { useState } from 'react'
import {Routes,Router,BrowserRouter,Link} from "react-router-dom"



function App() {


  return (
    <>
     <div className='flex flex-row gap-6'>
 <Link p to='/'>Home</Link>
 <Link to='/services'>Services</Link>
 <Link to='/about'>About</Link>
     </div>
    </>
  )
}
 export function About (){
   return <h2 className='bg-red-500'>Navigating to about page</h2>
 }
 export function services(){
   return <h2> this is the service page</h2>
 }



export default App
