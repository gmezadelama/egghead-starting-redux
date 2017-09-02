import React from 'react'
import FilterLink from '../containers/FilterLink'

export const AddTodo = ({ getNextTodoId }, { store }) => {
  let input
  let onClick = () => {
    store.dispatch({
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

AddTodo.contextTypes = {
  store: React.PropTypes.object
}

export const Footer = () => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink
        filter='SHOW_ALL'
      >
        All
      </FilterLink>
      {', '}
      <FilterLink
        filter='SHOW_ACTIVE'
      >
        Active
      </FilterLink>
      {', '}
      <FilterLink
        filter='SHOW_COMPLETED'
      >
        Completed
      </FilterLink>
    </p>
  )
}
