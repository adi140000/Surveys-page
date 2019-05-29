import React, { Component } from 'react';
import { BrowserRouter as Router ,Redirect} from "react-router-dom";
import "./style.scss";
import Header from "./header/Header"
import Main from "./main/Main";
import Footer from "./footer/Footer";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: ''
    }
  }

  componentDidMount = () => {
    if (sessionStorage.getItem('loginSurveys')) {
      const login = sessionStorage.getItem('loginSurveys');
      this.setState({
        login
      })
   }
  }

  logOut = () => {
    sessionStorage.removeItem('loginSurveys');
    this.setState({
      login:''
    })
  }

  logInMethod = (e,login,password) => {
    e.preventDefault();      
    fetch(`http://localhost:3500/login?login=${login}&password=${password}`)
      .then(res => res.json())
      .then(data => {        
        if (data) {
          sessionStorage.setItem('loginSurveys', login);
          this.setState({
            login: login
          })
               
        }     
        
      })
      return true;


  }



  render() {
    const { login } = this.state
    return (
      <>
        <Router>
          <Header logOut={this.logOut} login={login} />
          <Main login={login} logInMethod={this.logInMethod} />
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
