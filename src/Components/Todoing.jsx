import React from 'react'

export const Todoing = ({todo}) => {
  return (
    <div>
        <span className={todo.completed?'line-through text-gray-400':''}>{todo.name}</span>
    <button>Toogle</button>
    <button>Delete</button>
    </div>
  )
}
