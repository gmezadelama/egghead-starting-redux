import React from 'react'
import { connect } from 'react-redux'

const AddTodo = ({ getNextTodoId, dispatch }) => {
  let input
  let onClick = () => {
    dispatch({
      type: 'ADD_TODO',
      text: input.value,
      id: getNextTodoId()
    });
    input.value = ''
  }
  return (
    <div>
      <input ref={node => { input = node }} />
      <button onClick={ onClick }>
        Add Todo
      </button>
    </div>
  )
}

export default connect()(AddTodo)
