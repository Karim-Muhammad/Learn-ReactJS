import React from "react";

export default function Style2_inline() {
  return (
    <div
      style={{
        color: "orange",
        //    "font-size": "5rem", // kebab-case
        backgroundColor: "gray", // camelCase
      }}
    >
      <h2>Style2_inline</h2>
      {/* How applied? from App.js */}
      <p className="family">Family Font</p>
    </div>
  );
}
