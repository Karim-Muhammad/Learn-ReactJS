import React, { Component } from "react";
// Just For Giving a Scenario
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  render() {
    if (this.state.isLogin) {
      return <LoggedPage />;
    } else {
      return <LogoutPage />;
    }
  }
}
