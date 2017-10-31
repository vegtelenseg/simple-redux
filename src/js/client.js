import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

// Find out which action was fired
const reducer = (initialState=0, action) => {
  if (action.type === "ADD") {
    return initialState + 1;
  } else if (action.type === "SUB") {
    return initialState - 1;
  }
  return initialState;
}

// Create one initial store. This is an equivalent of a react state
const store = createStore(reducer, 1)

// Listen to store changes. This will be fired whenever a dispatch is made.



export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      reduxStore: store.getState(),
    };
  }


  addOne = () => {
    store.dispatch({type: "ADD"});
    this.setState({
      reduxStore: store.getState()
    })

  }

  minusOne = () => {
    store.dispatch({type: "SUB"});
    this.setState({
      reduxStore: store.getState()
    })
  }


  render() {
    return (
      <div>
        <div>The state is {this.state.reduxStore}</div>
        <input type="button" value="Add one" onClick={this.addOne.bind(this)}/>
        <input type="button" value="Minus one" onClick={this.minusOne.bind(this)}/>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
