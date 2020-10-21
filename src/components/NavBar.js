import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../drop_in.logo.png'
import axios from 'axios';

class NavBar extends React.Component {

    handleLogoutClick() {
        axios.delete("http://localhost:3000/logout", { withCredentials: true}).then(response => {
            this.props.handleLogout()
        })
        .catch(error => {console.log("logout error", error)})
    }
render() {
const arrow =<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
<path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
console.log(this.props)
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light">
      <NavLink to="/"> <img src= {logo} alt= 'oasis logo' className='logo'></img></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {this.props.loggedInStatus !== "NOT_LOGGED_IN" ?  (
    <div>
    <ul className="navbar-nav mr-auto">
     
      <li className="nav-item-events">
      <NavLink to="/events" className="nav-tab-events"> Find Events </NavLink> 
      </li>
      
      <li className="nav-item">
      <NavLink to="/create/new/event" className="nav-tab-create"> Create Event </NavLink> 
      </li>
      <li className="nav-item">
      <NavLink to="/profile" className="nav-tab-profile"> Profile </NavLink> 
      </li>
      <li className="nav-item-logout">
      <NavLink onClick={() => this.handleLogoutClick()} to="/auth" className="nav-tab-events">Logout {arrow} </NavLink> 
      </li>
    </ul>
    </div>
      )
      : 
      <ul className="navbar-nav mr-auto1">
     
      <li className="nav-item-ml-auto">
      <NavLink to="/auth" className="nav-tab-events"> Login {arrow} </NavLink> 
      </li>
      
      </ul>
      }

    </div>
</nav>



           )
     }
}

export default NavBar;
{/* //         <div className="navbar"> 
//       <ul className="navbar-nav mr-auto">
// <li className=""><NavLink to="/"> <img src= {logo} alt= 'oasis logo' className='logo'></img></NavLink></li>
// <NavLink to="/events" className="nav-tab-events"> Find Events </NavLink> 
// <NavLink to="#" className="nav-tab-profile"> Dashboard </NavLink> 
// <NavLink to="#" className="nav-tab-create"> Create Event </NavLink> 
// </ul>
// </div> */}
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/"> <img src= {logo} alt= 'oasis logo' className='navbar-brand'></img></NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     
      <li class="nav-item">
      <NavLink to="/events" className="nav-tab-events"> Find Events </NavLink> 
      </li>
      <li class="nav-item">
      <NavLink to="#" className="nav-tab-profile"> Dashboard </NavLink> 
      </li>
      <li class="nav-item">
      <NavLink to="#" className="nav-tab-create"> Create Event </NavLink> 
      </li>
    </ul>
</nav> */}