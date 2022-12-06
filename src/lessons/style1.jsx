import React from "react";
import "./style.css";

export default function Style1() {
  const [state, usState] = React.useState(true);
  const changeS = () => {
    usState(!state);
    console.log(state);
  };
  return (
    <div>
      <h1 className={`primary ${state ? "xl" : "lg"}`}>
        Welcome, To Style Components
      </h1>
      <button onClick={changeS}>Change</button>
    </div>
  );
}
