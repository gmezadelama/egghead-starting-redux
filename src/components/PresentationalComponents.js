import React from 'react'
import FilterLink from '../containers/FilterLink'

export const AddTodo = ({ store, getNextTodoId }) => {
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

export const Footer = ({ store }) => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink
        filter='SHOW_ALL'
        store={store}
      >
        All
      </FilterLink>
      {', '}
      <FilterLink
        filter='SHOW_ACTIVE'
        store={store}
      >
        Active
      </FilterLink>
      {', '}
      <FilterLink
        filter='SHOW_COMPLETED'
        store={store}
      >
        Completed
      </FilterLink>
    </p>
  )
}
