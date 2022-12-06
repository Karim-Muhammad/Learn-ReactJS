import React, { Component } from "react";

export default class CompA extends Component {
  render() {
    const props = this.props;
    return <div>Class Component || {props.name}</div>;
  }
}
