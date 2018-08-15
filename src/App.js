import React, { Component } from "react";
import classes from "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
