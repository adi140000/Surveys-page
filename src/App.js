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
      login: '',
      id:null
    }
  }

  componentDidMount = () => {
    if (sessionStorage.getItem('loginSurveys') && sessionStorage.getItem('idSurveys')) {
      const login = sessionStorage.getItem('loginSurveys');
      const id = sessionStorage.getItem('idSurveys');
      this.setState({
        login,
        id
      })
   }
  }

  logOut = () => {
    sessionStorage.removeItem('loginSurveys');
    sessionStorage.removeItem('idSurveys');
    this.setState({
      login:'',
      id:null
    })
  }

  logInMethod = (e,login,password) => {
    e.preventDefault();      
    fetch(`http://localhost:3500/login?login=${login}&password=${password}`)
      .then(res => res.json())
      .then(data => {  
        console.log(data);
        if (data) {
          sessionStorage.setItem('loginSurveys', login);
          sessionStorage.setItem('idSurveys', data);
          this.setState({
            login,
            id:data,
          })
               
        }     
        
      })
      return true;


  }



  render() {
    const { login,id } = this.state
    return (
      <>
        <Router>
          <Header logOut={this.logOut} login={login} />
          <Main id={id} login={login} logInMethod={this.logInMethod} />
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
