import React from 'react'; 
import logo from '../Flat Basketball Player Vector Illustration-02.png'
import pic from '../drop_in.logo.png'

class Home extends React.Component {

    joinUp= () => {
        window.location.href = '/auth';
    }
    render() {
        const peep = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
      </svg>
        return (
            <div className="HomePage">
             
                <div className="welcome-message"><h1>Join the Community,<br></br> Create Events,<br></br> Drop-In & Play.</h1>
                 <p className="home-p"> Become a member of Drop-In Sports and become connected<br></br>to a network dedicated to finding you pick-up games to join.</p>
                 <button onClick={()=> this.joinUp()}className="join-button">Join {peep}</button>
                 <img className="logo-home"src={pic} alt="logo"></img>
                 </div>
                


                
                
               <img className="home-pic" src={logo} alt="logo"></img>
               </div>
         
        )
    }
}

export default Home;