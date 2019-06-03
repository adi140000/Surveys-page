import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''

        }
    }

    handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        });    
        

    }

    

    render() {
        const { logInMethod } = this.props;
        const { login, password } = this.state;
        return (
            <section className='fill_section'>
                <form onSubmit={(e)=>logInMethod(e,login,password)} className="fill_data">
                    <div className="reg_part">
                        <label htmlFor="login">Login</label>
                        <input className='box' value={login} onChange={this.handleChange} id="login"></input>
                    </div>
                    <div className="reg_part">
                        <label htmlFor="pass">Password</label>
                        <input value={password} className='box' onChange={this.handleChange} id="password" type="password"></input>
                    </div>
                    <input className="btn btn_login"  type="submit" value="Login"></input>
                </form>
            </section>);
    }
}

export default Login;