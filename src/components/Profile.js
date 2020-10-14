import React from 'react';
import axios from 'axios'
class Profile extends React.Component {
state = {
    profile: [],
    attending_events: []
}
    componentDidMount() {
        axios.get('http://localhost:3000/users', {withCredentials: true})
        .then(response => {
            let user = response.data.filter(data => data.id === this.props.user.id)
            this.setState({
                profile: user[0],
                attending_events: user[0].attending_events
            })
        })
    }
    render () {
        console.log(this.state.attending_events)
        const {first_name, last_name, attendings, image, bio, attending_events, events, id} = this.state.profile
        return (
            <div className="show-page">
            <div className="wrapper">
<header className="header">
<h1>{first_name} {last_name}</h1>

</header>
<aside className="sidebar">
</aside>
<article className="content">
<h3>Owned Events</h3>
{this.state.attending_events.map(event => (
<ul>
    <li className="event-info">{event.name}</li>
    <li className="event-info">{event.time}</li>
</ul>
))}
<h3>Saved Events</h3>

</article>
<footer className="footer">

<div id="user-attending">

</div>
</footer>
<div className="footer">

</div>
</div>
        
    </div>
        )
    }
}

export default Profile