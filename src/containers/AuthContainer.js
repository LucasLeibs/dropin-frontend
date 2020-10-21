import React from 'react';
import Auth from '../components/Auth'; 

class AuthContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulSignup = this.handleSuccessfulSignup.bind(this);
    }

    handleSuccessfulSignup(data) {
        this.props.handleLogin(data);
        this.props.history.push("/events")

    }
    
render () {
    console.log(this.props)
    return (
        <div>
            <Auth handleSuccessfulSignup={this.handleSuccessfulSignup}/>
         
        </div>
    )
}
}

export default AuthContainer;