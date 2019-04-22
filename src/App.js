import React, { Component } from 'react';
import "./style.scss";
import Header from "./header/Header"
import Main from "./main/Main";
import Footer from "./footer/Footer";


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
