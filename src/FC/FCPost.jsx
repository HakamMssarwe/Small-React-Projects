import React from 'react'
import '../Styles/style.css'
import {withRouter} from 'react-router-dom'
import logo from '../logo.svg'

function FCPost(props) {

  const sendToAccountPage = () => {props.history.push('/userpage')}
  
    return (
        <div id="FCPost">
           <div id="navBar"><button onClick={sendToAccountPage}>Account</button><img src={logo} alt=""/><button onClick={props.signOutFromAccount}>Sign out</button></div>
          {props.posts.filter(post =>post.posterName===props.user).map(post=>
           <div className="postContainer">
           <p className="title">Title: {post.title}</p>
           <p className="descreption">Descreption: {post.descreption}</p>
           <p className="posterName">Posted By: {post.posterName}</p>
           {post.posterName === props.user && <button onClick={e => props.deleteUserPost(post.id)} style={{width:"10%", height:"10%"}}>Delete Post</button>}
           </div>
          )}
          
        </div>
    )
}

export default withRouter(FCPost)