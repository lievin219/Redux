import React from 'react'
import { ACTIONS } from './Todo'
export const Todoing = ({todo,dispatch}) => {


 

  return (
    <div>
        <span className={todo.completed?'line-through text-gray-400':''}>{todo.name}</span>
    <button onClick={()=>dispatch({type:ACTIONS.TOOGLETODO,payload:{id:todo.id}})}>Toogle</button>
    <button onClick={()=>dispatch({type:ACTIONS.,payload:{id:todo.id}})}>Delete</button>
    </div>
  )
}
