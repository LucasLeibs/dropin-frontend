import React from 'react';
import moment from 'moment'
import {FormGroup, Label, InputGroupAddon, Input, Form} from 'reactstrap'
import 'reactstrap'
import axios from 'axios'

class Comments extends React.Component {
    state = {
        newComment: ""
    
    }

    handleSubmit= (e) => {
        e.preventDefault()
        console.log(e)
        axios.post("http://localhost:3000/comments", { 
            user_id: this.props.user.id, 
            event_id: this.props.event.id,
            body: this.state.newComment
    },
        {withCredentials: true})
        .then(response => {
            console.log("comment", response)
            window.location.href=`/event/${this.props.event.id}`
        })
    }

      handleCommentChange= (e) => {
          console.log(e)
          this.setState ({[e.target.name]: e.target.value})

      }
      deleteComment= event => {
          console.log(event)
          this.props.removeComment(event)
        
    
    }
      

   render() {
       console.log(this.props.event)
    const quote = <svg  width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
  </svg>
  const trash = <svg  width="1em" height="1em" viewBox="0 0 16 16" class="bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
const send =<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
</svg>
       return(
           <div> 
              
            {this.props.event.comments.map(comment => (
           
           <div className="comment">
           <p className="comment-name">{comment.user.first_name} {comment.user.last_name} </p>
           <p className="comment-body">"{comment.body}"{this.props.user.id === comment.user.id ? <svg onClick={()=> this.deleteComment(comment)} id={comment.id} width="1em" height="1em" viewBox="0 0 16 16" class="bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg> : null}</p>
           
           <p className="comment-time">{moment(comment.created_at).startOf('minute').fromNow()}</p>
           </div>
       ))}
        <form onSubmit={this.handleSubmit} class="form-inline1">
  <div class="form-group1 mx-sm-3 mb-2">
    <input type="text" name="newComment" value={this.state.newComment} class="form-control1" id="inputPassword2" placeholder="New Comment" onChange={this.handleCommentChange}></input>
    <button type="submit" class="btn btn-primary mb-2">{send}</button>
  </div>
  
</form>
    
    
       </div>

       )
   }
}

export default Comments