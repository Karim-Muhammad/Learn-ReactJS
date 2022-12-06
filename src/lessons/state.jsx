import React, { Component } from "react";

export default class State extends Component {
  state = {
    isLog: false,
  };

  handleData = () => {
    /*
    this.state = {
      ...this.state,
      isLog: !this.state.isLog,
    };
    */
    this.setState({
      ...this.state,
      isLog: !this.state.isLog,
    });
    console.log(this.state.isLog);
  };

  render() {
    return (
      <>
        <div>welcome {this.state.isLog ? "Visitor" : "User"}</div>
        <button onClick={this.handleData}>change</button>
      </>
    );
  }
}

// export default function state() {
//      const [state, useState] = React.useState();
//   return (
//     <div>state</div>
//   )
// }
