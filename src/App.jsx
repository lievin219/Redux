import { useState } from 'react'
import { Logging } from './Components/Logging'
import { Profiling } from './Components/Profiling'
import { Exercise } from './Components/Exercise'
import { Todo } from './Components/Todo'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
   
       {/* <Profiling/>
       <Logging/>
       <Exercise/> */}
       <Todo/>
      </div>
    
    </>
  )
}

export default App
