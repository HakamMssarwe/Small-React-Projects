import React, { Component } from 'react'
import '../Styles/style.css'
import logo from '../logo.svg'
import {withRouter} from 'react-router-dom'

class CCUserPage extends Component {
    constructor(props){
        super(props);

       this.state={
           title:"",
           descreption:"",
           posterName:""
       }
    }

    //Functions
    changeTitle = (title) => {this.setState({title:title.target.value})}
    changeDescreption = (descreption) => {this.setState({descreption:descreption.target.value})}
    sendToPostsPage = () => this.props.history.push("/posts") //I used this and not "router Link" due to an issue with CSS, it's bugged if you but Link inside a button
    resetInput = () =>{this.setState({title:"",descreption:""})} //This is used as a call back function that is send to the parent to reset input after operation was done


    render() {
        return (
            <div id="CCUserPage">
                <h1 id="welcomingUser">Welcome back {this.props.user.username}</h1>
                <div id="navBar"><button onClick={this.sendToPostsPage}>Posts</button> <img src={logo} alt=""/><button onClick={this.props.signOutFromAccount}>Sign out</button></div>
                <input onChange={this.changeTitle} id="title" type="text" placeholder="Title" value={this.state.title}/>
                <input onChange={this.changeDescreption} id="descreption" type="text" placeholder="Descreption" value={this.state.descreption}/>
                <button onClick={e => this.props.updatePostFee(this.state,this.resetInput)}>Post</button>
            </div>
        )
    }
}

export default withRouter(CCUserPage)