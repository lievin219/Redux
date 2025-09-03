import React from 'react'

export const cart = () => {
     const Products=[{id:1,name:'shoes',price:3500},{id:2,name:'television',price:5000}]
  return (
    <div>
        <h1>
            Products
        </h1>
        <div className='flex flex-col'>
       {Products.map(product=>(
       <div key={product.id}>{product.name}</div>
   
))}
        </div>
    </div>
  )
}
