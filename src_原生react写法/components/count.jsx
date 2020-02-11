import React, { Component } from 'react';

export default class Count extends Component {
  state = {
    number: 0
  };

  increment = () => {
    const { value } = this.refs.checkNumber;
    const { number } = this.state;
    this.setState({ number: number + value * 1 });
  };

  decrement = () => {
    const { value } = this.refs.checkNumber;
    const { number } = this.state;
    this.setState({ number: number - value });
  };

  incrementOdd = () => {
    const { value } = this.refs.checkNumber;
    const { number } = this.state;
    if (number % 2 === 1) {
      this.setState({ number: number + value * 1 });
    }
  };

  incrementAsync = () => {
    const { value } = this.refs.checkNumber;
    const { number } = this.state;
    setTimeout(() => {
      this.setState({ number: number + value * 1 });
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1>计数器数值为:{this.state.number}</h1>
        <select ref="checkNumber">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    );
  }
}
