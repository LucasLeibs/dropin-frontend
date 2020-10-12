import React from 'react';
import {Link} from 'react-router-dom';
class EventShowPage extends React.Component {
    
    render () {
        // debugger;
        console.log("supp", this.props)
        return (
            <div>
               Name: {this.props.event.name}
            </div>
        )
    }
}

export default EventShowPage