import React, { Component } from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import todoAppReducers from './reducers'
import { loadState, saveState } from './store/localStorage'
import throttle from 'lodash/throttle'

const persistedState = loadState()

const store = createStore(todoAppReducers, persistedState)

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  })
}, 1000))

const render = () => {
ReactDOM.render(
  <Provider store = { store }>
    <TodoApp />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
};

store.subscribe(render)
render();
