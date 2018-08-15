import React from "react";
import css from "./Header.css";

const header = props => {
  return (
    <header>
      <h1 className={css.heading}>
        Random Quote Machine + <br />
        React
      </h1>
    </header>
  );
};

export default header;
