import React from 'react';
import mapboxgl from 'mapbox-gl';
import Map from '../components/Map.js'

class MapContainer extends React.Component {




render() {
    console.log("map", this.props.state)
    return (
        <div>
            <h1>status: {this.props.loggedInStatus}</h1>
        <Map />
        </div>
    )
}
}





export default MapContainer