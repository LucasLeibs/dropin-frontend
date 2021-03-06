import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import UserAvatar from 'react-user-avatar'
import moment from 'moment'

class Profile extends React.Component {
    state= {
    profile: [],
    attending_events: [],
    attendings: [],
    events: [], 
    // uploadedfile: null,
    // file_url: "", 
    isOwnerOpen: true,
    isAttendingOpen: true
}
 ownerToggle= () => {
this.setState({ isOwnerOpen: !this.state.isOwnerOpen})
 }

 attendingToggle=() => {
   this.setState({
     isAttendingOpen: !this.state.isAttendingOpen
   })
 }
    componentDidMount() {
        axios.get('http://localhost:3000/users', {withCredentials: true})
        .then(response => {
            let user = response.data.filter(data => data.id === this.props.user.id)
            this.setState({
                profile: user[0],
                attending_events: user[0].attending_events,
                attendings: user[0].attendings,
                events: user[0].events
            })
        })
    }

    deleteEvent=(id) => {
        fetch(`http://localhost:3000/attendings/${id}`, {
            method: "DELETE"
        }).then(this.setState({
          attendings: this.state.attendings
        }));
     window.location.href="/profile"
    }
    
    deleteOwnedEvent=(id) => {
        fetch(`http://localhost:3000/events/${id}`, {
            method: "DELETE"
        }).then(this.setState({
            events: this.state.events
        }));
     window.location.href="/profile"
    }
    // submitPhoto=(e) => {
    //   e.preventDefault()
    //   console.log(this.state.uploadedfile)
    //   console.log(this.props.user.id)
    //   const formData = new FormData();
    // formData.append("file", this.state.uploadedfile);
    // formData.append("user_id", this.props.user.id);
    // fetch('http://localhost:3000/uploadfile', {
    //   method: 'POST', 
    //   body: formData
    // }).then(response => response.json())
    // .then(data => {
    //   this.setState({
    //     file_url: data.path
    //   })
    // }
    //   )
    // }


    // handlePhotoChange=(e) => {
      
    //   if(e.target.files[0]) {
    //     this.setState({
    //       uploadedfile: e.target.files[0]
    //     })
    //   }
    
    // }
    convertTime = (timeToConvert) => {
      let time = timeToConvert.split(":");
      let hours = +time[0];
      let minutes = +time[1];
      let timeValue;
      if (hours > 0 && hours <= 12) {
        timeValue = "" + hours;
      } else if (hours > 12) {
        timeValue = "" + (hours - 12);
      } else if (hours === 0) {
        timeValue = "12";
      }
      timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes;
      timeValue += hours >= 12 ? " PM" : " AM";
      return timeValue;
    };
    
    render () {
       const {time} = this.state.events
      
       
        const {first_name, last_name, email, attendings, image, bio, attending_events, events, id} = this.state.profile
        const person2 = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
      </svg>
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
    const star = <svg onClick={()=> this.saveEvent()} iheight="1em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>
    const pin = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
  </svg>
    const X = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>

        return (
            <div className="show-page">
            <div className="wrapper">
<header className="header">
 
<h1> {person2} {first_name} {last_name}</h1>
<h6 className="email">{email}</h6>

</header>
<aside className="sidebar">
              <div className="profile-card">
              <div className="avatar">   
                    <UserAvatar size="100" name={`${first_name} ${last_name}`} />
                   </div>
                </div>
                <p className="joined">Joined on <br></br>{moment(this.state.profile.created_at).format("MMM Do, YYYY")}</p>
    {/* <img src={`http://localhost:3000${this.state.file_url}`}></img>
    <form enctype="multipart/form-data"
              method="post"
  onSubmit={this.submitPhoto}>
  <input onChange={this.handlePhotoChange} type="file"
    id="profile-photo-input" name="file"
    accept="image/png, image/jpeg" 
  />
  <input
    className="submit-input"
    type="submit"
    value="Upload"
  />
</form>

<div class="input-group">
  <div class="input-group-prepend">
    <span  class="input-group-text">Bio</span>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div> */}
</aside>
<article className="content">
  <div className="owned-events">

<button className="profile-button" onClick={this.ownerToggle} style={{ marginBottom: '1rem' }}>Owned Events</button> 
      <Collapse isOpen={this.state.isOwnerOpen}>
          {this.state.events.map(event => (
    <div className="owner-card-body">
    <h5>{event.name} <svg onClick={() => this.deleteOwnedEvent(event.id)} id={event.id} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg></h5>
   <p className="paragraph"> {clock}{this.convertTime(event.time)}<br></br>
    {calendar}{event.date}<br></br>
    <Link to={`/event/${event.id}`}>Details</Link > 
    </p>
    </div>
))} 

  
      </Collapse>
{/* {this.state.events.map(event => (
    <div className="profile-event-card-body">
    <h5>{event.name} <svg onClick={() => this.deleteOwnedEvent(event.id)} id={event.id} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg></h5>
   <p className="paragraph"> {clock}{event.time}<br></br>
    {calendar}{event.date}<br></br>
    <Link to={`/event/${event.id}`}>Details</Link > 
    </p>

    </div>

))} */}
</div>

<button className="profile-button" onClick={this.attendingToggle} style={{ marginBottom: '1rem'}}>Attending Events</button>
<Collapse isOpen={this.state.isAttendingOpen}>
{this.state.attendings.map(attending => (
   
    <div className="owner-card-body"> 

    <h5>{attending.event.name} <svg onClick={() => this.deleteEvent(attending.id)} id={attending.event.id} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg></h5>
  
   <p className="paragraph"> {clock}{this.convertTime(attending.event.time)}<br></br>
    {calendar}{attending.event.date}<br></br>
    <Link to={`/event/${attending.event.id}`}>Details</Link > 
    </p>

    </div>

))}
</Collapse>
</article>
<footer className="footer">

<div id="user-attending">

</div>
</footer>
<div className="footer">

</div>
</div>
        
    </div>
        )
    }
}

export default Profile