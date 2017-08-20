import React, { Component } from 'react';
import logo from './logo.svg';
import './TodoApp.css';

class TodoList extends Component {
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
    const {
      todos,
      visibilityFilter
    } = this.props;
    const visibleTodos = this.getVisibleTodos(todos, visibilityFilter);
    return (
      <div>
        <input ref={node => { this.input = node }} />
        <button onClick={this.todoOnClick.bind(this)}>
          Add Todo
        </button>
        <ul style={{maxWidth: '25%', marginLeft: '30%'}}>
          {visibleTodos.map(todo =>
            <li key={todo.id}
              onClick={this.toggleTask(todo.id).bind(this)}
              style={{ textDecoration: todo.completed ? 'line-through': 'none' }}>
              {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show:
          {' '}
          <FilterLink
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}
            store={this.props.store}
          >
            All
          </FilterLink>
          {', '}
          <FilterLink
            filter='SHOW_ACTIVE'
            currentFilter={visibilityFilter}
            store={this.props.store}
          >
            Active
          </FilterLink>
          {', '}
          <FilterLink
            filter='SHOW_COMPLETED'
            currentFilter={visibilityFilter}
            store={this.props.store}
          >
            Completed
          </FilterLink>
        </p>
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
        <TodoList {...this.props.store.getState()} store={this.props.store} />
      </TodoWrapperApp>
    )
  }
}

const FilterLink = ({
    filter,
    currentFilter,
    store,
    children
  }) => {
    if (filter === currentFilter) {
      return <span>{children}</span>;
    }
    return (
      <a href='#'
         onClick={e => {
           e.preventDefault();
           store.dispatch({
             type: 'SET_VISIBILITY_FILTER',
             filter
           });
         }}
      >
        {children}
      </a>
    );
  };

export default TodoApp;
