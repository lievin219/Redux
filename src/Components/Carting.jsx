import React, { useReducer } from "react";

export const Carting = () => {
  const FUNCTIONALITIES = {
    ADDTOCART: "ADD",
    DECREASETOCART: "DECREASE",
    INCREASETOCART: "INCREASE",
    REMOVETOCART: "REMOVE",
  };

  const Products = [
    { id: 1, name: "shoes", price: 3500 },
    { id: 2, name: "television", price: 5000 },
  ];

  function createReducer(state, action) {
    switch (action.type) {
      case FUNCTIONALITIES.ADDTOCART: {
        const existingProduct = state.find(
          (item) => item.id === action.payload.id
        );
        if (existingProduct) {
          return state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
      
        return [...state, { ...action.payload, quantity: 1 }];
      }

      case FUNCTIONALITIES.INCREASETOCART:
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      case FUNCTIONALITIES.DECREASETOCART:
        return state
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0); 

      default:
        return state;
    }
  }

  const [cart, dispatch] = useReducer(createReducer, []);
  const totalCart=cart.reduce((sum,item)=>sum+item.quantity,0)
   const totalPrice=cart.reduce((sum,item)=>sum+item.quantity*item.price)

  return (
    <div>
      <h1>Products</h1>
      <div className="flex flex-col">
        {Products.map((product) => (
          <div className="flex flex-row gap-3" key={product.id}>
            {product.name} - {product.price}
            <button
              className="text-blue-600"
              onClick={() =>
                dispatch({
                  type: FUNCTIONALITIES.ADDTOCART,
                  payload: product,
                })
              }
            >
              ADD
            </button>
          </div>
        ))}
      </div>

      <div>
        {cart.length === 0 ? (
          <p>Your cart is Empty</p>
        ) : (
            
          cart.map((item) => (
            <div key={item.id}>
              
              <span>
                <h1>Cart Items</h1>
                {item.name} - {item.price} x {item.quantity}
              </span>
              <button
                onClick={() =>
                  dispatch({
                    type: FUNCTIONALITIES.DECREASETOCART,
                    payload: item.id,
                  })
                }
              >
                Decrease
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: FUNCTIONALITIES.INCREASETOCART,
                    payload: item.id,
                  })
                }
              >
                Increase
              </button>
            </div>
          ))
        )}
        <h2>{totalCart}</h2>
        <h3>{totalPrice}</h3>
      </div>
    </div>
  );
};
