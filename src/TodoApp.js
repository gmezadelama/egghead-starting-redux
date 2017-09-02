import React, { Component } from 'react';
import logo from './logo.svg';
import './TodoApp.css';
import { FilterLink, Todo,
      AddTodo, TodoList, Footer } from './components/PresentationalComponents'

class TodoMain extends Component {
  nextTodoId = 0;
  getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(
          t => t.completed
        );
      case 'SHOW_ACTIVE':
        return todos.filter(
          t => !t.completed
        );
    }
  }
  todoOnClick = (inputValue) => {
    this.props.store.dispatch({
      type: 'ADD_TODO',
      text: inputValue,
      id: this.nextTodoId++
    });
  }
  toggleTask = (todoId) => {
    this.props.store.dispatch({
      type: 'TOGGLE_TODO',
      id: todoId
    });
  }
  render () {
    const {
      todos,
      visibilityFilter
    } = this.props;
    const visibleTodos = this.getVisibleTodos(todos, visibilityFilter);
    return (
      <div>
        <AddTodo todoOnClick={ this.todoOnClick } />
        <TodoList
          visibleTodos={ visibleTodos }
          toggleTask={ this.toggleTask }
        />
        <Footer
          store={ this.props.store }
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
        <TodoMain {...this.props.store.getState()} store={this.props.store} />
      </TodoWrapperApp>
    )
  }
}

export default TodoApp;
