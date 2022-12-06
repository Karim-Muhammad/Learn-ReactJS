import React, { Component } from "react";
import Children from "./15_children";

export default class Parent extends Component {
  state = {
    name: "Parent name",
  };

  changeParentName = () => {
    console.log(this);
    this.setState({ name: "Parent Name Updated" });
  };
  sendParamFromChildToParent = (childParam) => {
    this.setState({ name: childParam });
  };
  render() {
    console.log("Parent Render");
    const { name } = this.state;
    return (
      <>
        <div>{name}</div>
        <Children handleParent={this.changeParentName} />
        <Children handleParent={this.sendParamFromChildToParent} />
      </>
    );
  }
}
