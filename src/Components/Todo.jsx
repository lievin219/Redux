import React from 'react'
import { useReducer,useState } from 'react'
 
  const ACTIONS={ADDTODO:'add-todo'}
   function reducer(state,action){
     if(action.type===ACTIONS.ADDTODO){
         return [...state,newtodos(action.payload.name)]
     }
     return state
   }
   function newtodos(name){
    return {TimeCreated:Date.UTC(),name:name,completed:false}
}
 

export const Todo = () => {


     const [todo,dispatch]=useReducer(reducer,[])
      const [name,setName]=useState('')
     function handleSubmit(e){
         e.preventDefault()
         dispatch({type:ACTIONS.ADDTODO,payload:{name:name}})
         setName('')
     }
      console.log(todo)
  return (
 <form action="" onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    {todo.map(Todo=>
        <Todoing key={Todo.TimeCreated} todo={Todo}/>
    )}
 </form>
  )
}
