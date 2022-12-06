import React from "react";

export default class Conditional_render extends React.Component {
  #id;
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  login = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    let msg;
    if (this.state.isLoggedIn) {
      msg = <div>Welcome, Karim</div>;
    } else {
      msg = <div>Guest</div>;
    }
    return (
      <>
        {msg}
        <button onClick={this.login}>
          {this.state.isLoggedIn ? "logout" : "login"}
          {/* this.state.isLoggedIn ? "logout" : "login" */}
        </button>
        {(this.state.isLoggedIn && "Congratulations!") || "Bad!"}{" "}
        {/* Similar to ternary operator */}
        {/* {this.state.isLoggedIn && "Congratulations!"} */}
        {/* if you want when falsy value do nothing! */}
      </>
    );
  }
}

/**
 * There are 4 ways to do:
 *   1- if/else
 *   2- ternary operator
 *   3- element variable
 *   4- short circut operator ( && ,     || )
 */
