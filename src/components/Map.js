import axios from 'axios';
import React from 'react'; 
import ReactMapGL, {GeolocateControl, NavigationControl, Marker, Popup} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import '../map_pin.png'
import EventCard from './EventCard'


class Map extends React.Component {
    state = {
        viewport : {
    longitude:-94.692584,
    latitude: 42.188877,
    zoom: 2
    },
  popupInfo: null
}

    myMap = React.createRef()
    geocoderContainerRef = React.createRef();
     
    handleViewportChange = (viewport) => {
        this.setState({
            viewport: {...this.state.viewport, ...viewport}
        })
    }
   
  handlePinClick= (pin) => {
      console.log(pin)
      this.setState({popupInfo: pin})
  }
    
  _renderPopup() {
      const {popupInfo} = this.state
      return (
          popupInfo && (
     <Popup 
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
          >
            <EventCard info={popupInfo} />
          </Popup>
          )
      )
  }
    // componentDidMount() {
        
       
    //     mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXNsZWlicyIsImEiOiJja2Z5OGVmb20xMjlxMnRvazY0OTlqMXVkIn0.G1QPTc55QLc2rXKcO47jzw';
    //     const map = new mapboxgl.Map({
        
    //     container: this.mapContainer,
    //     style: 'mapbox://styles/mapbox/streets-v11',
    //     center: [this.state.lng, this.state.lat],
    //     zoom: this.state.zoom
    //     });
    // }
    
    render() {
       const piny = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
       <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
     </svg>
        console.log("pins",this.props.pins)
        return (
            <div className="mapContainer">
                <h1>Search Events</h1>
                <p className="event-p">Search by city and find events near you!</p>
                 <div
          ref={this.geocoderContainerRef}
          style={{
            height: 100,
            background: "white",
            display: "flex",
            alignItems: "center",
            paddingLeft: 4,
            

          }}
        ></div>
                <ReactMapGL ref ={this.myMap}
                {...this.state.viewport}
                width= "100%"
                height="100%"
                onViewportChange={this.handleViewportChange}
               
                mapStyle='mapbox://styles/mapbox/streets-v11'
                mapboxApiAccessToken = 'pk.eyJ1IjoibHVjYXNsZWlicyIsImEiOiJja2Z5OGVmb20xMjlxMnRvazY0OTlqMXVkIn0.G1QPTc55QLc2rXKcO47jzw'>
                 {this.props.pins.map((pin) => (
                    <Marker key = {pin.id} latitude={pin.latitude} longitude={pin.longitude} >
                        <button onClick={()=> this.handlePinClick(pin)} className="pin-button">
                            {piny}
                        </button>
                    </Marker>
                ))}
                {this._renderPopup()}
               <Geocoder mapRef={this.myMap} containerRef={this.geocoderContainerRef}  mapboxApiAccessToken = 'pk.eyJ1IjoibHVjYXNsZWlicyIsImEiOiJja2Z5OGVmb20xMjlxMnRvazY0OTlqMXVkIn0.G1QPTc55QLc2rXKcO47jzw' onViewportChange={this.handleViewportChange} />
               {/* <GeolocateControl/>
               <NavigationControl/> */}
               <GeolocateControl />
               </ReactMapGL>
            </div>
        )
    }
}

export default Map;