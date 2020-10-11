import * as React from 'react';
import {PureComponent} from 'react';
import EventContainerPage from '../containers/EventPageContainer'

export default class EventCard extends PureComponent {
    state = {
        showEvent: false
    }

    handleClick= (info) => {
        this.setState({
            showEvent: true
        })
    }
    renderEvent = () => {
        if(this.state.showEvent === true) {
            window.location.href = 'event/show'
            return (
                <EventContainerPage event ={this.props.info}/>
            )
        }
    }
  render() {
    const {info} = this.props;
    const displayName = `${info.name}, ${info.sport}`;

    
    return (
      <div className="event-card">
        <div>
          {displayName} |{' '}
        <button onClick={()=> this.handleClick(info)}>
            Drop-In
        </button>
        </div>
        <img width={240} src={info.image} />
       {this.renderEvent()}
      </div>
      
    );
  }
}