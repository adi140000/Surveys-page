import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "./style.scss";
import Header from "./header/Header"
import Main from "./main/Main";
import Footer from "./footer/Footer";


class App extends Component {

  state = {
    isLogin: true,
  }

  componentWillMount = () => {


    fetch("http://localhost:3500/data")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  render() {
    const { isLogin } = this.state
    return (
      <>
        <Router>
          <Header />
          <Main decision={isLogin} />
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
