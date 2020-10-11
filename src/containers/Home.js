import React from 'react'; 
import logo from '../drop_in.logo.png'

class Home extends React.Component {

    joinUp= () => {
        window.location.href = '/auth';
    }
    render() {
        return (
            <div className="HomePage">
             
                <div className="welcome-message"><h1>Join the Community.</h1>
                 <p className=""> Become a member and become connected to a network dedicated to pick-up sports.</p>
                 </div>
                <div className="welcome-message2"><h1>Create Your Own Event.</h1></div>
                <div className="welcome-message3"><h1>Drop-in and Play.</h1></div>
                <div className="welcome-message4"><h1>Find Events Near You.</h1></div>


                
                <button onClick={()=> this.joinUp()}className="join-button">Join</button>
               {/* <img className="home-pic" src={logo} alt="logo"></img> */}
               </div>
         
        )
    }
}

export default Home;