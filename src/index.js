import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

class Provider extends Component {
  getChildContext () {
    return {
      store: this.props.store
    }
  }
  render () {
    return this.props.children
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
}

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
