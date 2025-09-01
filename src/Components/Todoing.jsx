import React from 'react'

export const Todoing = ({todo}) => {

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
 

  return (
    <div>
        <span className={todo.completed?'line-through text-gray-400':''}>{todo.name}</span>
    <button>Toogle</button>
    <button>Delete</button>
    </div>
  )
}
