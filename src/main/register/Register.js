import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<form className="reg">
            <div className="reg_part">
                <label htmlFor="Login">Login</label>
                <input id="Login"></input>
            </div>
            <div className="reg_part">
                <label htmlFor="pass1">Password</label>
                <input id="pass1" type="password"></input>
            </div>
            <div className="reg_part">
                <label htmlFor="pass2">Password</label>
                <input id="pass2" type="password"></input>
            </div>
            <div className="reg_part">
                <label htmlFor="mail">Email</label>
                <input id="mail" type="email"></input>
            </div>
            <input className="btn btn_register" type="submit" value="Registr now"></input>
        </form >);
    }
}

export default Register;