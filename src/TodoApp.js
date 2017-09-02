import React, { Component } from 'react';
import logo from './logo.svg';
import './TodoApp.css';
import AddTodo from './components/AddTodo'
import Footer from './components/Footer'
import VisibleTodoList from './containers/VisibleTodoList'

class TodoMain extends Component {
  nextTodoId = 0;
  getNextTodoId = () => (this.nextTodoId++)
  render () {
    const {
      todos,
      visibilityFilter
    } = this.props;
    return (
      <div>
        <AddTodo
          getNextTodoId = { this.getNextTodoId }
        />
        <VisibleTodoList />
        <Footer
          visibilityFilter={ visibilityFilter }
        />
      </div>
    )
  }
}

class TodoWrapperApp extends Component{
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ToDo App</h2>
        </div>
        <p className="App-intro">
          Here is a ToDo App based on the Starting With Redux course from egghead.io
          To get started, edit <code>src/TodoApp.js</code> and save to reload.
        </p>
        { this.props.children }
      </div>
    )
  }
}

class TodoApp extends Component {
  render () {
    return (
      <TodoWrapperApp>
        <TodoMain />
      </TodoWrapperApp>
    )
  }
}

export default TodoApp;
