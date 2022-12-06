import React, { Component } from "react";

export default class Children extends Component {
  state = {
    name: "Child Component Name",
  };
  render() {
    console.log("Children Updated");
    const { handleParent } = this.props;
    return (
      <>
        <div>
          <p>Children</p>
          {/* <button onClick={handleParent}>Change Name of Parent!</button> */}
          {/* if i want send parameter from child to parent */}
          <button onClick={() => handleParent(this.state.name)}>
            Send Parameter from Child To Parent!
          </button>
        </div>
      </>
    );
  }
}
