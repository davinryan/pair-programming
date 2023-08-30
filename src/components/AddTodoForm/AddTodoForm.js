import React from 'react'

import './AddTodoForm.css'

const AddTodoForm = (props) => {
  return (
    <div data-testid='addTodoForm' className="addTodoForm">
      <form onSubmit={props.onSubmit} id="myForm">
        <input data-testid='addTodoDescription' className="addTodoDescription"
               type="text"
               placeholder="Add to-do"
               onChange={props.onChange}
        />
        <button data-testid='addTodo' className="addTodo">Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm