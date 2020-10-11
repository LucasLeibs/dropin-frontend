import React from 'react';
import mapboxgl from 'mapbox-gl';
import Map from '../components/Map.js'
import axios from 'axios'

class MapContainer extends React.Component {
state = {
    pins: []
}


handleLogoutClick() {
    axios.delete("http://localhost:3000/logout", { withCredentials: true}).then(response => {
        this.props.handleLogout()
    })
    .catch(error => {console.log("logout error", error)})
}
componentDidMount() {
    axios.get('http://localhost:3000/events',{withCredentials: true})
    .then(response => {this.setState({pins: response.data})
})
}
render() {
    console.log("map", this.props)
    return (
        <div className="map">
            <h1>status: {this.props.loggedInStatus}</h1>
            <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Map pins = {this.state.pins} />
        
        </div>
    )
}
}





export default MapContainer