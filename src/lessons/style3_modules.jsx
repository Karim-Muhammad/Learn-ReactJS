import React from "react";
import styles3 from "./style3.module.css";

export default function Style3_modules() {
  return (
    <div className={styles3.bug}>
      Style3_modules
      {/* <p className={Style.pug}>PugJS</p> */}
    </div>
  );
}

// You have to have "react-script" version 2 or heigher
// to use "CSS Modules"
// Filename has to suffixed at the end with <filename>.module.css

// import <whatever-name> from "./<filename>.module.css"
// advantage of .module.css is "locally scope"

// means children of component which you applied in it css module, have not been applied like parent
