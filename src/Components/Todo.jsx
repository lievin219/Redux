import React from 'react'
import { useReducer,useState } from 'react'
import { Todoing   } from './Todoing'
 
  const ACTIONS={ADDTODO:'add-todo',TOOGLETODO:'toogle'}
   function reducer(state,action){
     if(action.type===ACTIONS.ADDTODO){
         return [...state,newtodos(action.payload.name)]
     }
     else if (action.type===ACTIONS.TOOGLETODO){
         return state.map(todo=>{
           if(todo.id===action.payload.id){
             return {...todo,completed: !todo.completed}
           }
        return todo
      }
   
         )
     }
     return state
   }
   function newtodos(name){
    return {id:Date.now(),name:name,completed:false}
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
    <input type="text" value={name} onChange={e=>setName(e.target.value)} className='bg-white text-black'/>
    {todo.map(todo=>
        <Todoing key={todo.id} todo={todo}/>
    )}
 </form>
  )
}
