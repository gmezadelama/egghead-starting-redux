import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { toggleTodo } from '../actions'
import { getVisibleTodos } from '../reducers'

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

  render () {
    let {
      visibleTodos,
      toggleTask
    } = this.props
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
  visibleTodos: getVisibleTodos(state, match.params.filter || 'all')
})

export default withRouter(
  connect(mapStateToProps, { toggleTask: toggleTodo })(VisibleTodoList)
)
