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
    zoom: 3.5
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
        console.log("pins",this.props.pins)
        return (
            <div className="mapContainer">
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
                        <button onClick={()=> this.handlePinClick(pin)} className="pin">
                            {pin.name}
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