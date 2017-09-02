import React, { Component } from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

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
