import React, { Component } from 'react'
import FCPost from '../FC/FCPost';
import '../Styles/style.css'
import CCLogin from './CCLogin.jsx'
import CCSignUp from './CCSignUp.jsx';
import CCUserPage from './CCUserPage.jsx'
import {Switch, Route,withRouter} from "react-router-dom";

class CCMain extends Component {

constructor(props)
{
  //Create an admin account when project is open for the first time
  localStorage.setItem(0,JSON.stringify({username:"Hakam",password:"123"})); 

  super(props);
  this.state = {
    currentUserInSession: "",
    posts:[],
    errorMessage: "", //if user had invalid input when trying to login
    postCount: 0
  }

}
//Functions
loginValidation = (dataFromChild) =>{
for(let i = 0; i < localStorage.length; i++)
{
  let user = JSON.parse(localStorage.getItem(i));
  if (dataFromChild.usernameInput === user.username && dataFromChild.passwordInput === user.password)
    {
    //Update the current session
    this.setState({currentUserInSession:user,errorMessage:""},() => {this.props.history.push('/userpage')})
    return;
    }
  
  this.setState({errorMessage:"Invalid Username/Password, please try again!"})
}

}

updatePostFee = (dataFromChild,resetChildInput) =>{

if (dataFromChild.title.trim() === "" || dataFromChild.descreption.trim() === "")
    {
      alert('Empty fields detected, please fill every required field before posting!')
      return;
    }
   


//Signing the post by the user who's signed in at the current moment
dataFromChild.posterName = this.state.currentUserInSession.username;
dataFromChild.id = this.state.postCount;

//Increase counter
this.setState((prevState, props) => ({   postCount: prevState.postCount + 1 }));

//update posts array
this.setState({posts:[...this.state.posts,dataFromChild]},() =>{alert('Posted Successfully!'); resetChildInput()})

}

signOutFromAccount = () =>{
  this.setState({currentUserInSession:{username:null,password:null}},() => this.props.history.push('/'))
}

deleteUserPost = (postID) =>{

  let tempPost = this.state.posts;
  this.setState({posts:tempPost.filter(post => post.id != postID)})
}



clearErrorMessage = () => {this.setState({errorMessage:""})}


  render() {
    return (
      <div id="CCMain">
        <Switch>
        <Route exact path="/"><CCLogin loginValidation={this.loginValidation} errorMessage={this.state.errorMessage}/></Route>
        <Route path="/signup"><CCSignUp clearErrorMessage={this.clearErrorMessage}/></Route>
        <Route path="/userpage"><CCUserPage user={this.state.currentUserInSession} updatePostFee={this.updatePostFee} signOutFromAccount={this.signOutFromAccount}/></Route>
        <Route path="/posts"><FCPost user = {this.state.currentUserInSession.username} posts={this.state.posts} signOutFromAccount={this.signOutFromAccount}    deleteUserPost={this.deleteUserPost}/></Route>
        </Switch>
            </div>
    )
  }
}

export default withRouter(CCMain)
