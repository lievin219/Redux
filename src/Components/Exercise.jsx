import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
 const ACTIONS={INCREMENT:'increment',DECREMENT:'decrement'}
 function reducer(state,action){
   if(action.type===ACTIONS.INCREMENT){
    return {count:state.count+1}
   }
   else if (action.type===ACTIONS.DECREMENT){
    return {count:state.count-1}
   }
   return state
 }

export const Exercise = () => {
     const [state,dispatch]=useReducer(reducer,{count:0})
  
     function increment(){
        dispatch({type:'increment'})
     }
      function decrement(){
        dispatch({type:'decrement'})
      }
  return (
    <div>
        <button onClick={()=>{increment()}}>+</button>
        <h1>{state.count}</h1>
        <button onClick={()=>{decrement()}}>-</button>
    </div>
  )
}
