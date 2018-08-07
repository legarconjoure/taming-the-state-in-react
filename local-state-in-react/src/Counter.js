import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  onDecrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button type="button" onClick={this.onIncrement}>Increment</button>
        <button type="button" onClick={this.onDecrement}>Decrement</button>
      </div>);
  }
}

export default Counter;