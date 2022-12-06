import React, { Component } from "react";

export default class Bind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome, People",
    };

    //     bind methods
    //     this.say_bye = this.say_bye.bind(this);
    // you bind once time only, unlike bind() in render method (each re-render)
  }

  say_bye() {
    this.setState({
      message: "Good Bye!",
    });
    console.log(this);
  }

  render() {
    return (
      <>
        <div>{this.state.message}</div>
        {/* <button onClick={this.handleChange}>Say Bye</button> */}
        {/* <button onClick={this.say_bye}>Say Bye</button> */}
        <button onClick={this.say_bye.bind(this)}>Say Bye</button>
        {/* This Solution not perfectly, because each re-render will create new handler function by .bind() */}
        {/* Second Way */}
        <button onClick={() => this.say_bye()}>Say Bye</button>
        {/* Note there is difference between first line, and this line */}
        {/* And Also this way has some Performance Implication in some scenarios */}
        {/* us useful if method accepts parameters */}

        {/* Third Way we use bind in Constructor Not in Render Method */}
        {/* https://youtu.be/kVWpBtRjkCk?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&t=647 */}

        {/* Last Way */}
        {/* we use arrow function for defining function as class property not method of class */}
      </>
    );
  }
}

// There are many ways to bind method, functions
