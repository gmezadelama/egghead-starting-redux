import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import TodoApp from '../TodoApp';
import '../index.css';

const Root = ({ store }) => (
  <Provider store = { store }>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/:filter" component={ TodoApp } />
          <Route path="/" component={ TodoApp } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

export default Root
