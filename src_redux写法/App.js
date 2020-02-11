import React, { Component } from 'react';
import Count from './components/count';

export default class App extends Component {
  render() {
    const store = this.props.store;
    return <Count store={store} />;
  }
}
