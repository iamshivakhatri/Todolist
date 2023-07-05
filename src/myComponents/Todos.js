import React from 'react'

import {TodoItems} from "./TodoItems";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto"
  }
  return (
    <div className='container my-5' style={myStyle}>
      <h3 className='text-center'> Todos List</h3>
      {props.todos.length === 0? <p> The list is empty</p>:
      props.todos.map((todo)=> {
        return (<TodoItems todo = {todo} key = {todo.sno} onDelete = {props.onDelete}/>
        )
      }
      )
      } 
      
    </div>
  )
}
