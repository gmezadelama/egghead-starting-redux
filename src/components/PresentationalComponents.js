import React from 'react'
import FilterLink from '../containers/FilterLink'

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

export const AddTodo = ({ todoOnClick }) => {
  let input
  let onClick = () => {
    todoOnClick(input.value);
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
