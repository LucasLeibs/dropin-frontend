import React from 'react';
import mapboxgl from 'mapbox-gl';
import Map from '../components/Map.js'
import axios from 'axios'

class MapContainer extends React.Component {



handleLogoutClick() {
    axios.delete("http://localhost:3000/logout", { withCredentials: true}).then(response => {
        this.props.handleLogout()
    })
    .catch(error => {console.log("logout error", error)})
}

render() {
    console.log("map", this.props)
    return (
        <div>
            <h1>status: {this.props.loggedInStatus}</h1>
            <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Map />
        
        </div>
    )
}
}





export default MapContainer