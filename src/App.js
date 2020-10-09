import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './containers/MapContainer'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './containers/Home'
import AuthContainer from './containers/AuthContainer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    loggedInStatus: "NOT_LOGGED_IN", 
    user: {}
  };
  this.handleLogin = this.handleLogin.bind(this);
}


handleLogin(data)  {
  this.setState({
    loggedInStatus: "LOGGED_IN",
    user: data
  })
}


  
 
  render() {
  return (
    <div className="App">
      <BrowserRouter>
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
          <MapContainer {...props}  loggedInStatus={this.state.loggedInStatus} />
        )} />
      </Switch>
     
     </BrowserRouter>
    </div>
  );
}
}
export default App;
