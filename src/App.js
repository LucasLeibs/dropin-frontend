import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import MapContainer from './containers/MapContainer'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './containers/Home'
import AuthContainer from './containers/AuthContainer'
import axios from 'axios'
import NavBar from './components/NavBar'
import EventShowPage from './components/EventShowPage'
import Profile from './components/Profile'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    loggedInStatus: "NOT_LOGGED_IN", 
    user: {},
    allEvents: []
  };
  this.handleLogin = this.handleLogin.bind(this);
 this.handleLogout = this.handleLogout.bind(this);
}

checkLoginStatus() {
axios.get("http://localhost:3000/logged_in", { withCredentials: true })
.then(response => {
  console.log("lucas is a fuck",response)
  if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
    this.setState({
      loggedInStatus: "LOGGED_IN", 
      user: response.data.user
    })
  } else if(!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN", 
      user: {}
    })
  }
  
}).catch(error => {
  console.log("check login error", error)
})
}
// checkLoginStatus() {
  
// axios.get("http://localhost:3000/logged_in", { withCredentials: true })
// .then(response => { 
//     this.setState({
//       loggedInstatus: "LOGGED_IN", 
//       user: this.state.user
//     })
//     console.log("logged_in?", response)
//   })
// }



handleLogout() {
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  })
}
handleLogin(data)  {
  // debugger;
  this.setState({
    loggedInStatus: "LOGGED_IN",
    user: data.user
  })
}


componentDidMount() {
  this.checkLoginStatus();
  axios.get('http://localhost:3000/events',{withCredentials: true})
  .then(response => {this.setState({allEvents: response.data})
})
}
  
 
  render() {
    console.log("USER",this.state.user)
  return (
    
      <BrowserRouter>
      <div className="app">
        <NavBar  user ={this.state.user} loggedInStatus={this.state.loggedInStatus} handleLogout={this.handleLogout}/>

      <Switch>
        <Route exact path={"/"} 
        render={props => (
          <Home {...props} loggedInStatus={this.state.loggedInStatus} />
        )} />
        <Route exact path={"/auth"}
          render={props => (
            <AuthContainer {...props}  handleLogin={this.handleLogin} handleSuccessfulSignup={this.handleSuccessfulSignup}/>
          )} />
        <Route exact path={"/events"} 
        render={props => (
          <MapContainer {...props} user ={this.state.user} loggedInStatus={this.state.loggedInStatus} handleLogout={this.handleLogout} />
        )} />
        <Route exact path={"/profile"} 
        render={props => (
          <Profile {...props} user ={this.state.user} loggedInStatus={this.state.loggedInStatus} handleLogout={this.handleLogout} />
        )} />
        <Route exact path={`/event/:EventId`} 
        render={(props) => {
          
          const EventId = props.match.params.EventId
          const event = this.state.allEvents.find(e => e.id === parseInt(EventId))
         
          return event ?  <EventShowPage {...props} user = {this.state.user} event = {event} loggedInStatus={this.state.loggedInStatus} handleLogout={this.handleLogout}/>
          : "Loading..." 
        }} />
      </Switch>
      <footer className="main-footer">
hello
</footer>
      </div>
     </BrowserRouter>
 
  );
}
}
export default App;
