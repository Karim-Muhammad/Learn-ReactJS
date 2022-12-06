import React, { Component } from "react";

export default class GroupCount extends Component {
  constructor(props) {
    super(props);
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
      () => console.log("Callback v: " + this.state.count) // new version
    );
    // callback executed after setting new state (same job of componentDidUpdate)
    // because this callback will executed after setting new state, and re-render is complete
    this.setState(this.state);
  }

  inc = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log("Callback v: " + this.state.count); // see previous version
  };

  inc5 = () => {
    // Try uncomment this lines and check
    //     this.inc();
    //     this.inc();
    //     this.inc();
    //     this.inc();
    //     this.inc();
    //     React Group multiple `setState` call for
    // performance & optimization
    //     to a single update

    //     Correct Way
    this.setState((prevState, prevProps) => ({ count: prevState.count + 5 }));
  };

  render() {
    //     console.log(this);
    return (
      <div>
        <button onClick={this.inc}>increase</button>
        <button onClick={this.inc5}>increase5</button>
        <div>{this.state.count}</div>
        <button onClick={this.dec}>decrease</button>
      </div>
    );
  }
}
