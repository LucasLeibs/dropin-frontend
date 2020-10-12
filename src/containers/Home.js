import React from 'react'; 
import logo from '../drop_in.logo.png'

class Home extends React.Component {

    joinUp= () => {
        window.location.href = '/auth';
    }
    render() {
        return (
            <div className="HomePage">
             
                <div className="welcome-message"><h1>Join the Community, Create Events, Drop-In & Play</h1>
                 <p className="home-p"> Become a member and become connected to a network dedicated to pick-up sports.</p>
                 </div>
                


                
                <button onClick={()=> this.joinUp()}className="join-button">Join</button>
               {/* <img className="home-pic" src={logo} alt="logo"></img> */}
               </div>
         
        )
    }
}

export default Home;