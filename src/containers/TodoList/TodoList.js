import React from 'react'
import Todo from '../../components/Todo/Todo'
import './TodoList.css'

const TodoList = (props) => {
  const toDoList = props.tasks.map(task => (
    <Todo key={task.id} task={task} index={task.id} onDelete={props.onDelete}/>
  ))

  return (
    <div className="todoList">
      {toDoList}
    </div>
  )
}

export default TodoList