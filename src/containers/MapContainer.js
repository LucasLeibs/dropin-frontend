import React from 'react';
import mapboxgl from 'mapbox-gl';
import Map from '../components/Map.js'
import axios from 'axios'

class MapContainer extends React.Component {
state = {
    pins: []
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

        <Map pins = {this.state.pins} />
        
        </div>
    )
}
}





export default MapContainer