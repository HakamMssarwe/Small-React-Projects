import React, { Component } from 'react'
import logo from '../logo.svg'
import '../Styles/style.css'
import {Link,withRouter} from "react-router-dom";

class CCSignUp extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            usernameInput:"",
            passwordInput:"",
            confirmPasswordInput:"",
            errorMessage:""
        }
    }

//Functions
changeUsernameInput = (usernameInput) =>{
    this.setState({usernameInput:usernameInput.target.value.trim()})
};
changePasswordInput = (passwordInput) =>{this.setState({passwordInput:passwordInput.target.value})};
changeConfirmPasswordInput = (confirmPasswordInput) =>{this.setState({confirmPasswordInput:confirmPasswordInput.target.value})};

signupValidation = () =>{

if (this.state.usernameInput == "" || this.state.passwordInput == "" || this.state.confirmPasswordInput == "")
{
    this.setState({errorMessage:"Please fill in the empty fields!"})
   return;
}


for(let i = 0; i < localStorage.length; i++)
{
    let user = JSON.parse(localStorage.getItem(i));

    if (user.username === this.state.usernameInput)
    {
        this.setState({errorMessage:"Username already exists, try another!"})
        return;
    }

    if (this.state.passwordInput !== this.state.confirmPasswordInput)
    {
        this.setState({errorMessage:"You have to use the same password for confirmation!"})
        return;
    }

}

//Add user to the local storage, each key is basically the index of the object in the localstorage (key is localStorage.length because we want to increament the key by 1 each time we create a user)
localStorage.setItem(localStorage.length,JSON.stringify({username:this.state.usernameInput,password:this.state.passwordInput}));
this.setState({errorMessage:""},() =>{alert('Account successfully created!'); this.props.clearErrorMessage(); this.props.history.push('/')})

}


    render() {
        return (
            <div id="CCSignUp">
             <img src={logo} alt="logo"/>
             <input onChange={this.changeUsernameInput} type="text" placeholder="Username"/>
             <input onChange={this.changePasswordInput} type="password" placeholder="Password"/>
             <input onChange={this.changeConfirmPasswordInput} type="password" placeholder="Confirm Password"/>
             <p id="errorMessage">{this.state.errorMessage}</p>
             <button onClick={this.signupValidation}>Signup</button> 
             <Link id="link" to="/">Already have an account?</Link>
            </div>
        )
    }
}

export default withRouter(CCSignUp)