import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<form onSubmit={this.handleSubmit} className="fill_data">
            <div className="reg_part">
                <label htmlFor="login">Login</label>
                <input value={this.state.login} onChange={this.handleChange} id="login"></input>
            </div>
            <div className="reg_part">
                <label htmlFor="pass">Password</label>
                <input value={this.state.pass1} onChange={this.handleChange} id="pass" type="password"></input>
            </div>
            <input className="btn btn_login" type="submit" value="Login"></input>
        </form>);
    }
}

export default Login;