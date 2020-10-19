import React from 'react';
import {Link} from 'react-router-dom';
import UserCard from './UserCard'
import axios from 'axios';
import UserAvatar from 'react-user-avatar'
import { Alert } from 'reactstrap';
import {Collapse} from 'reactstrap'
import moment from 'moment'
import Comments from './Comments.js'

class EventShowPage extends React.Component {
    state= {
      joined: false,
      attending_events: [],
      profile: [],
      attendingIds: [],
      visible: false,
      comments: [],
      commentsOpen: false,
    }

    loadComments = (id) => {
// console.log(id)
//       axios.get(`http://localhost:3000/events/${id}`, {withCredentials: true})
     this.setState({
        // comments: response.data.comments,

        commentsOpen: !this.state.commentsOpen
      })
    }
    
    
    joinEvent= (e) => {
      // let ids = attending_events.map(event => event.id)
      // if(ids.includes(this.props.event.id))
      if(this.state.joined === false) {
        axios.post('http://localhost:3000/attendings',{
            user_id: this.props.user.id,
            event_id: this.props.event.id
        },
        {withCredentials: true}
        ).then(response => {
          window.location.href=`/event/${this.props.event.id}`
          // if(attendingIds.includes(response.data.event.id)) {
          //   this.setState({
          //     joined: true            
          //   })
          // }
          
          console.log(this.state.joined)
        
        })
      } else {
        this.setState({
          visible: true
        })
      }
    }
    removeComment=(comment) => {
    fetch(`http://localhost:3000/comments/${comment.id}`, {
      method: "DELETE"
  }).then(response => { 
      window.location.href = `/event/${this.props.event.id}`
  })
}

    onDismiss = () => {
      this.setState({
        visible: false
      })
    }

    componentDidMount() {
    axios.get('http://localhost:3000/users', {withCredentials: true})
        .then(response => {
          
            let user = response.data.filter(data => data.id === this.props.user.id)
            console.log("HEYO", user)
            let ids = user[0].attending_events.map(event => event.id)
            if(ids.includes(this.props.event.id)) {
              this.setState({
                attending_events: user[0].attending_events,
                joined: !this.state.joined
              })
            } 
        })
    }
    render () {
      console.log(this.state.comments)
        const {name, date, time, details, image, sport, address, city, state, zipcode, user, attending_users} = this.props.event
        
        const clock = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
        <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
      </svg>
        const calendar = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
      </svg>
      const person = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
      <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
    </svg>
    
    const pin = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
  </svg>
  const check = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
</svg>
        const trash = <svg className="trash" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
       
       return (
            <div className="show-page">
                <div className="wrapper">
        <header className="header"><h1 className="event-h1">{name}
        {this.state.joined === true ? <button className="event-button" onClick={()=> this.joinEvent()}>Joined {check} </button> : <button className="event-button" onClick={()=> this.joinEvent()}>Join Event</button> }
        </h1>
        <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
      You are already attending this event!
    </Alert>
  <h6 className="event-p">{calendar}  {moment(date).format("MMM Do")}<br></br>{clock} {moment({time}).format('LT')}<br></br> {pin}<a href={`https://maps.google.com/?q=${address}, ${city}, ${state}`}>{address}, {city}, {state}, {zipcode}</a></h6>
  <p className="event-captain">{person} {user.first_name} </p>
  </header>
  <aside className="sidebar">
      <img className="event-image" src={image} alt="event pic"></img>
  </aside>
  <article className="event-content">
      <br></br>
      <div className="details">
    <h3 className="details-header">Details</h3>
    
    <h6 className="event-p"></h6>
    <p className="event-p">{details}</p>
    <div className="comments">
    <button  className="view-comments" onClick={() => this.loadComments(this.props.event.id)}>View Comments({this.props.event.comments.length})</button>
    <Collapse isOpen={this.state.commentsOpen}>
   <Comments removeComment = {this.removeComment} user = {this.props.user} event={this.props.event} comments ={this.state.comments}/>

    </Collapse>
  </div>
    </div>
  </article>
  <footer className="footer">
  <h4> Players attending:( {attending_users.length} )</h4>
  <div id="user-attending">
  <UserCard attending_users = {attending_users} />
  </div>
  </footer>
 
</div>
               {/* Name: {name}
               Date : {date}
               Time: {time}
               Location:
               {address}, {city}, {state}, {zipcode}
               <button OnClick={()=> this.joinEvent}>Join Event</button> */}
            
        </div>
        )
    }
}

export default EventShowPage