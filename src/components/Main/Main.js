import React from "react";
import css from "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }
  componentDidMount() {
    this.getDataHandler();
  }

  getDataHandler = () => {
    fetch("https://talaikis.com/api/quotes/random/")
      .then(res => res.json())
      .then(res => {
        const quote = res.quote;
        const author = res.author;
        this.setState({
          quote,
          author
        }).catch(err => console.log(err));
      });
  };

  render() {
    return (
      <main className={css.container}>
        <p className={css.author}>{this.state.author}</p>
        <p className={css.quote}>{this.state.quote}</p>

        <button className={css.next} onClick={this.getDataHandler}>
          Next
        </button>
      </main>
    );
  }
}

export default Main;
