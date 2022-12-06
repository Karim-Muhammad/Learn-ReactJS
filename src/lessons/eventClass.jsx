import React, { Component } from "react";

export default class EventClass extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };
  //   regular function will make this refer to undefined
  // so whether you bind this function in constructor
  // or use function expression (arrow function) which make this
  // refer to Class
  render() {
    return (
      <React.Fragment>
        <div>{this.state.count}</div>
        {/* Infinite */}
        {/* <button onClick={this.handleClick()}></button> */}
        <button onClick={this.handleClick}>inc</button>
      </React.Fragment>
    );
  }
}
