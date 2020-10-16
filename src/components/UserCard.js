import React from 'react';
import UserAvatar from 'react-user-avatar'


class UserCard extends React.Component {
    render() {
       
        return (
            <div className="box">
            {this.props.attending_users.map(user => (
            
                <div className="card">
                    <div className="avatar">   
                    <UserAvatar size="48" name={`${user.first_name} ${user.last_name}`} colors={['#d41e1e', '#1e2963', '#c5cbe8']}/>
                   </div>
                    {user.first_name}<br></br>
                    {user.last_name}
                </div>
            ))}
            
            </div>
        )
    }
}

export default UserCard