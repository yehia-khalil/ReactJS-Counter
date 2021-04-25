import React from 'react';

class Counter extends React.Component {

    constructor() {
      super();
      this.state = {
        counter: 1
      }
    }
    increase = () => {
      this.setState({counter: this.state.counter+1});
    }
    decrease = () => {
      this.setState({counter: this.state.counter-1});
    }
    render() {
      return (
        <div>
          <div>counter = {this.state.counter}</div>
          <button onClick={this.increase}>Increase</button>
          <button onClick={this.decrease}>Decrease</button>
        </div>
      );
  
    }
  
  }
  export default Counter;
