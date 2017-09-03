import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ getNextTodoId, addTodo }) => {
  let input
  let onClick = () => {
    addTodo(input.value);
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

export default connect(null, { addTodo })(AddTodo)
