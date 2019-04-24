import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            pass1: "",
            pass2: "",
            email: ""
        }
    }

    handleChange = (e) => {
        console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value,
        })

    }

    handleSubmit = (e) => {
        this.setState({
            login: "",
            pass1: "",
            pass2: "",
            email: ""
        })
        e.preventDefault();
    }

    render() {
        return (<form onSubmit={this.handleSubmit} className="fill_data">
            <div className="reg_part">
                <label htmlFor="login">Login</label>
                <input value={this.state.login} onChange={this.handleChange} id="login"></input>
            </div>
            <div className="reg_part">
                <label htmlFor="pass1">Password</label>
                <input value={this.state.pass1} onChange={this.handleChange} id="pass1" type="password"></input>
            </div>
            <div className="reg_part">
                <label htmlFor="pass2">Password</label>
                <input value={this.state.pass2} onChange={this.handleChange} id="pass2" type="password"></input>
            </div>
            <div className="reg_part">
                <label htmlFor="mail">Email</label>
                <input value={this.state.email} onChange={this.handleChange} id="email" type="email"></input>
            </div>
            <input className="btn btn_register" type="submit" value="Registr now"></input>
        </form >);
    }
}

export default Register;