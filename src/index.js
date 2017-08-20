import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

const render = () => {
ReactDOM.render(<TodoApp store={store}/>, document.getElementById('root'));
registerServiceWorker();
};

store.subscribe(render)
render();
