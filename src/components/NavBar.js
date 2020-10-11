import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../drop_in.logo.png'

class NavBar extends React.Component {
render() {
    return (
        <div className="navbar"> 
<NavLink to="#"><img src= {logo} alt= 'oasis logo' className='logo'></img> </NavLink>   
<NavLink to="/"> Home </NavLink> 
<NavLink to="/events"> Find Events </NavLink> 
<NavLink to="#"> Dashboard </NavLink> 
</div>
           )
     }
}

export default NavBar;