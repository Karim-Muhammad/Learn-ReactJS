import React, { Component } from "react";
import Blog from "./Blog";

class Persons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [
        { id: 0, title: "How to search well?" },
        { id: 1, title: "How to grow fast?" },
        { id: 2, title: "How to become dev?" },
        { id: 3, title: "How to play games?" },
        { id: 4, title: "How to speak confidently?" },
        { id: 5, title: "How to manage your time?" },
        { id: 6, title: "How to study hard?" },
        { id: 7, title: "How to be karizma?" },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
        {/*  */}
      </div>
    );
  }
}

export default Persons;
