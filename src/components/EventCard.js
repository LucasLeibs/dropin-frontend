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
    const displayName = `${info.name}, ${info.sport}`;

    
    return (
      <div className="event-card">
        <div>
          {displayName} |{' '}
        {/* <button onClick={()=> this.handleClick(info)}> */}
       
        </div>
        <img width={240} src={info.image} />
        <div>
        
    
           <Link to={`/event/${info.id}`}>Details</Link > 
      
       </div>
      </div>
      
    );
  }
}