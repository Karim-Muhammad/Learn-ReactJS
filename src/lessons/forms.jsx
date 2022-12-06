/**
 * In HTML From Tags
 * it responsible on their own to handle the user input
 * and update their respective value
 *
 * but what we want in react, to control form elements instead
 * form elements which whose value is controlled by react it is called
 * "Controlled Component"
 */

import React, { Component } from "react";

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (ev) => {
    const el = ev.target;
    this.setState({
      [el.id]: el.value,
    });
  };

  render() {
    return (
      <div>
        <form action="/">
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
          />
          <input
            value={this.state.email}
            type="email"
            name="email"
            id="email"
            onChange={this.handleChange}
          />
          <textarea
            //   defaultValue={this.state.message}
            //   value={this.state.message}
            name="message"
            id="message"
            cols="30"
            rows="10"
            //   onChange={this.handleChange}
          ></textarea>
          <input type="text" name="text" id="" />
        </form>
      </div>
    );
  }
}
