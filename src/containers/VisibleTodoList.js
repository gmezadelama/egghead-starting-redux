import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
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
          key={ todo.id }
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
      case 'all':
        return todos;
      case 'completed':
        return todos.filter(
          t => t.completed
        );
      case 'active':
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

const mapStateToProps = (state, { match }) => ({
  todos: state.todos,
  visibilityFilter: match.params.filter || 'all'
})

export default withRouter(
  connect(mapStateToProps, { toggleTask: toggleTodo })(VisibleTodoList)
)
