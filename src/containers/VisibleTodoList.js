import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

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

class VisibleTodoList extends Component {

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
    let {
      todos,
      visibilityFilter,
      toggleTask
    } = this.props
    let visibleTodos = this.getVisibleTodos(todos, visibilityFilter)
    return (
      <TodoList
        visibleTodos={ visibleTodos }
        toggleTask={ toggleTask }
      />
    )
  }
}

VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  toggleTask (todoId) {
    dispatch(toggleTodo(todoId));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)
