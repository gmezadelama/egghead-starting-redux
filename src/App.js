import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {store} from './store.js';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h3>Here goes the new components:</h3>
          <div id="counterNode"></div>
        </div>
      </div>
    );
  }

  componentDidMount(){
    const renderCounter = () => {
      ReactDOM.render(
        <UpdateCounterState
          value = {store.getState()}
          onIncrement = { () =>
            store.dispatch({type: 'INCREMENT'})
          }
          onDecrement = { () =>
            store.dispatch({type: 'DECREMENT'})
          }
          />,
        document.getElementById('counterNode')
      );
    }

    store.subscribe(renderCounter);
    renderCounter();
  }
}

const UpdateCounterState = ({value, onIncrement, onDecrement}) => {
  return  (  <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <span>{value}</span>
      </div> )
}




export default App;
