import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../drop_in.logo.png'

class NavBar extends React.Component {
render() {
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
     
      <li className="nav-item">
      <NavLink to="/events" className="nav-tab-events"> Find Events </NavLink> 
      </li>
      <li className="nav-item">
      <NavLink to="#" className="nav-tab-profile"> Dashboard </NavLink> 
      </li>
      <li className="nav-item">
      <NavLink to="#" className="nav-tab-create"> Create Event </NavLink> 
      </li>
    </ul>
    </div>
      )
      : 
      <div>"Hello"</div>
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