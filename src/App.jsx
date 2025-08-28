import { useState } from 'react'
import { Logging } from './Components/Logging'
import { Profiling } from './Components/Profiling'
import { Exercise } from './Components/Exercise'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-white text-blue-600'>
   
       <Profiling/>
       <Logging/>
       <Exercise/>
      </div>
    
    </>
  )
}

export default App
