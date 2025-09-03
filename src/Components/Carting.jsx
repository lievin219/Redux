import React, { act } from 'react'
import { useReducer } from 'react'

export const Carting = () => {
     const FUNCTIONALITIES={ADDTOCART:"ADD",DECRESETOCART:"DECREASE",INCREASETOCART:"INCREASE",REMOVETOCART:"REMOVE"}
    const Products=[{id:1,name:'shoes',price:3500},{id:2,name:'television',price:5000}]
     function createReducer(state,action){
          if (action.type===FUNCTIONALITIES.ADDTOCART){
             const existingProduct=state.find(item=>item.id===action.payload.id)
              if(existingProduct){
                 return state.map(item=>
                     item.id===item.payload.id?{...item,quantity:item.quantity+1}:item
                 )
              }
              return [...state,{...action.payload.id,quantity:1}]
          }
          else if(action.type===FUNCTIONALITIES.INCREASETOCART){
           return state.map(item=>
            item.id===item.payload?{...item,quantity:item.quantity+1}:item
           )
          }
          else if(action.type===FUNCTIONALITIES.DECRESETOCART){
            return state.map(item=>
                 item.id===action.payload?{item,quantity:item.quantity-1}:item
            )
          }
           return state
     }

     const[cart,dispatch]=useReducer(createReducer,[])
    return (
      <div>
          <h1>
              Products
          </h1>
          <div className='flex flex-col'>
         {Products.map(product=>(
         <div className='flex flex-row gap-3' key={product.id}>
            {product.name}-{product.price}
           <button className='text-blue-600' onClick={dispatch({type:FUNCTIONALITIES.ADDTOCART,payload:product})}>ADD</button>
         </div>
     
  ))}
          </div>
           <div>
            {cart.length===0?(
                <p>your cart is Empty</p>
            ):
            cart.map(item=>
                <div key={item.id}>
                    <span> {item.name}{item.price}</span>
                    
                    <button onClick={dispatch({type:FUNCTIONALITIES.DECRESETOCART,payload:item.id})}>Decrese</button>
                    <button onClick={dispatch({type:FUNCTIONALITIES.INCREASETOCART,payload:item.id})}>increase</button>
                </div>
            )}
           </div>
      </div>
    )}

