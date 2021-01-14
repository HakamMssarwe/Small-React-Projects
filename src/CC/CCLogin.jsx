import React, { Component } from 'react'
import '../Styles/style.css'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'


export default class CCLogin extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            usernameInput:"",
            passwordInput:"",
        }
    }


    //Functions
    changeUsernameInput = (usernameInput) =>{this.setState({usernameInput:usernameInput.target.value})};
    changePasswordInput = (passwordInput) =>{this.setState({passwordInput:passwordInput.target.value})};


    render() {
        return (
            <div id="CCLogin">
             <img src={logo} alt="logo"/>
             <input onChange={this.changeUsernameInput} type="text" placeholder="Username"/>
             <input onChange={this.changePasswordInput} type="password" placeholder="Password"/>
             <p id="errorMessage">{this.props.errorMessage}</p>
             <button onClick={e => this.props.loginValidation(this.state)}>Login</button> 
             <Link id="link" to="/signup">Don't have an account?</Link>

             
            </div>
        )
    }
}
