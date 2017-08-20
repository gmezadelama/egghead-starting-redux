import React, { Component } from 'react';
import logo from './logo.svg';
import './TodoApp.css';

class TodoList extends Component {
  nextTodoId = 0;
  todoOnClick = () => {
    this.props.store.dispatch({
      type: 'ADD_TODO',
      text: this.input.value,
      id: this.nextTodoId++
    });
    this.input.value = '';
  }
  toggleTask = (todoId) => (() => {
    this.props.store.dispatch({
      type: 'TOGGLE_TODO',
      id: todoId
    });
  })
  render () {
    return (
      <div>
        <input ref={node => { this.input = node }} />
        <button onClick={this.todoOnClick.bind(this)}>
          Add Todo
        </button>
        <ul style={{maxWidth: '25%', marginLeft: '30%'}}>
          {this.props.todos.map(todo =>
            <li key={todo.id}
              onClick={this.toggleTask(todo.id).bind(this)}
              style={{ textDecoration: todo.completed ? 'line-through': 'none' }}>
              {todo.text}
            </li>
          )}
        </ul>
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
        <TodoList {...this.props} />
      </TodoWrapperApp>
    )
  }
}

export default TodoApp;
