import React, { Component } from 'react'

export const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={ onClick }
    style={{ textDecoration: completed ? 'line-through': 'none' }}>
    { text }
  </li>
)

export const TodoList = ({
  visibleTodos,
  toggleTask
}) => (
  <ul style={{maxWidth: '25%', marginLeft: '30%'}}>
    {visibleTodos.map(todo => (
        <Todo
          onClick={ () => {toggleTask(todo.id)} }
          completed={todo.completed}
          text={todo.text}
        />
      )
    )}
  </ul>
)

export default class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  toggleTask = (todoId) => {
    const { store } = this.context
    store.dispatch({
      type: 'TOGGLE_TODO',
      id: todoId
    });
  }

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

  render () {
    const { store } = this.context
    const state = store.getState()
    let visibleTodos = this.getVisibleTodos(state.todos, state.visibilityFilter)
    return (
      <TodoList
        visibleTodos={ visibleTodos }
        toggleTask={ this.toggleTask }
      />
    )
  }
}

VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}
