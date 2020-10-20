import * as React from 'react';
import {PureComponent} from 'react';
import EventShowPage from './EventShowPage'
import {Link} from 'react-router-dom';

export default class EventCard extends PureComponent {
    
  
    // }
    // renderEvent = (info) => {
    //     if(this.state.showEvent === true) {
    //        console.log("hello",info)
    //         return (
             
    //     }
    // }
  render() {
    const {info} = this.props;
    const displayName = `${info.name}`;

    
    return (
      <div className="event-card">
        <h5 className="event-card-title">
          {displayName}
        </h5>
        <Link className="event-card-link" to={`/event/${info.id}`}>Details</Link > 
        <div>
        <img width={240} src={info.image} />
        </div>
        <div>
        
  
      
       </div>
      </div>
      
    );
  }
}