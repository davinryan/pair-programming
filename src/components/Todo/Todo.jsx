import React from 'react'
import './Todo.css'

const Todo = (props) => (
  <div className='todo'>
    <>
      <span data-testid='todoDescription' className='todoDescription'>{props.task.description}</span>
      <i data-testid='todoDeleteButton' className='todoDeleteButton right' onClick={() => props.onDelete(props.index)}>Delete</i>
    </>
  </div>
)

export default Todo