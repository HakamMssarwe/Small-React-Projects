import React from 'react'
import '../Styles/style.css'
import {withRouter} from 'react-router-dom'
import logo from '../logo.svg'

function FCPosts(props) {

  const sendToAccountPage = () => {props.history.push('/userpage')}
  
    return (
        <div id="FCPosts">
           <div id="navBar"><button onClick={sendToAccountPage}>Account</button><img src={logo} alt=""/><button onClick={props.signOutFromAccount}>Sign out</button></div>
          {props.posts.map(post => 
           <div className="postContainer">
           <p className="title">Title: {post.title}</p>
           <p className="descreption">Descreption: {post.descreption}</p>
           <p className="posterName">Posted By: {post.posterName}</p>
           </div>
          )}
          
        </div>
    )
}

export default withRouter(FCPosts)