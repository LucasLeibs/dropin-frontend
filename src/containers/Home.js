import React from 'react'; 

class Home extends React.Component {


    render() {
        return (
            <div>
                <h1>Home</h1>
                <h1>status: {this.props.loggedInStatus}</h1>
            </div>
        )
    }
}

export default Home;