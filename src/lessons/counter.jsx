import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.dec = this.dec.bind(this);
  }

  dec() {
    this.setState(
      {
        // this here is undefined, without bind
        count: this.state.count - 1,
      },
      () => console.log(this.state.count) // new version
    );
    // callback executed after setting new state
    this.setState(this.state);
  }

  inc = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count); // see previous version
  };

  render() {
    console.log(this);
    return (
      <div>
        <button onClick={this.inc}>increase</button>
        <div>{this.state.count}</div>
        <button onClick={this.dec}>decrease</button>
      </div>
    );
  }
}
