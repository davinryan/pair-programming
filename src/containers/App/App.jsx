import React, {Component} from 'react'
import TaskIndicator from '../../components/TaskIndicator/TaskIndicator'
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm'
import TodoList from '../TodoList/TodoList'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [],

      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({...this.state, input: e.target.value})
  }

  handleSubmit = (e) => {
    let list
    e.preventDefault()
    if (this.state.input === '') {
      return
    } else {
      list = {description: this.state.input, id: this.state.tasks.length + 1}
    }


    this.setState({tasks: [...this.state.tasks, list], input: ''})
    const form = document.getElementById('myForm')
    form.reset()
  }

  handleDelete = (index) => {
    const filteredList = this.state.tasks.filter(list => {
      return list.id !== index
    })
    this.setState({...this.state, tasks: filteredList})
  }

  render() {
    return (
      <div className="App">
        <AddTodoForm onChange={this.handleChange} onSubmit={this.handleSubmit}/>

        <TodoList tasks={this.state.tasks} onDelete={this.handleDelete}/>

        <TaskIndicator number={this.state.tasks.length}/>
      </div>
    )
  }
}

export default App