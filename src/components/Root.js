import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import TodoApp from '../TodoApp';
import '../index.css';

const browserHistory = createBrowserHistory()

const Root = ({ store }) => (
  <Provider store = { store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ TodoApp } />
    </Router>
  </Provider>
)

export default Root
