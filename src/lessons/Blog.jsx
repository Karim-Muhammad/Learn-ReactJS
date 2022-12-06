import React from "react";

export default function Blog({ blog }) {
  const [state, setState] = React.useState({
    msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto nam",
  });
  function handleChange() {
    setState({
      msg: "Content Updating ...",
    });
  }
  return (
    // key={blog.id}
    <div>
      <h2>{blog.title}</h2>
      <p>{state.msg}</p>
      <button onClick={handleChange}>change content</button>
    </div>
  );
}
