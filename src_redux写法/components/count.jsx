import React, { Component } from 'react';
import { INCREMENT, DECREMENT } from '../redux/action_types';
import {
  creatIncrementAction,
  creatDecrementAction
} from '../redux/count_action_creator';

export default class Count extends Component {
  // redux情况下组件自身没有状态
  // state = {
  //   number: 0
  // };

  increment = () => {
    const { value } = this.refs.checkNumber;
    // const { number } = this.state;
    // this.setState({ number: number + value * 1 });
    this.props.store.dispatch(creatIncrementAction(value * 1));
  };

  decrement = () => {
    const { value } = this.refs.checkNumber;
    // const { number } = this.state;
    // this.setState({ number: number - value });
    this.props.store.dispatch(creatDecrementAction(value * 1));
  };

  incrementOdd = () => {
    const { value } = this.refs.checkNumber;
    const number = this.props.store.getState();
    if (number % 2 === 1) {
      this.props.store.dispatch(creatIncrementAction(value * 1));
    }
  };

  incrementAsync = () => {
    const { value } = this.refs.checkNumber;
    // const { number } = this.state;
    setTimeout(() => {
      this.props.store.dispatch(creatIncrementAction(value * 1));
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1>计数器数值为:{this.props.store.getState()}</h1>
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
