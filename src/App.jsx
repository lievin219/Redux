import { useState } from 'react'
import { Logging } from './Components/Logging'
import { Profiling } from './Components/Profiling'
import { Exercise } from './Components/Exercise'
import { Todo } from './Components/Todo'
import { cart } from './Components/cart'
import { Carting } from './Components/Carting'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
   
       {/* <Profiling/>
       <Logging/>
       <Exercise/> 
       <Todo/>*/}
      <Carting/>
       
      </div>
    
    </>
  )
}

export default App
