import React from 'react';
import axios from 'axios'
class Profile extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/users')
        .then(response => console.log("USAS", response))
    }
    render () {
        return (
            <div>
                <h1>{this.props.user.first_name}</h1>
            </div>
        )
    }
}

export default Profile