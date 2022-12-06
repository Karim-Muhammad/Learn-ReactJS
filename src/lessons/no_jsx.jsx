import React from "react";

export default function no_jsx() {
  return (
    // <div> <p> Hello Comp </p> </div>
    React.createElement(
      "div",
      { id: "about" },
      React.createElement("p", null, "Hello Comp")
    )
    //     so long syntax!
  );
}

