import React from "react";
import css from "./Footer.css";

const footer = props => {

  return (
    <footer className={css.container}>
      <p className={css.footnote}>
        A project by MP, with quotes by 
        <a href="https://talaikis.com/random_quotes_api/" className={css.quotesondesign}> Tadas Talaikis</a>
      </p>
      <a href="https://github.com/menep/" className={css.github}>See on GitHub</a>
    </footer>
  );
};

export default footer;
