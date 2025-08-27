import { useState } from 'react'
import { Logging } from './Components/Logging'
import { Profiling } from './Components/Profiling'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-white text-blue-600'>
   
       <Profiling/>
       <Logging/>
      </div>
    
    </>
  )
}

export default App
