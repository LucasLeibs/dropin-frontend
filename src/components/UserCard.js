import React from 'react';

class UserCard extends React.Component {
    render() {
        return (
            <div className="box">
            {this.props.attending_users.map(user => (
                <div className="card">
                    
                    {user.first_name}<br></br>
                    {user.last_name}
                </div>
            ))}
            
            </div>
        )
    }
}

export default UserCard