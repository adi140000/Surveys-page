import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import "./style.scss";
import Header from "./header/Header"
import Main from "./main/Main";
import Footer from "./footer/Footer";


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
