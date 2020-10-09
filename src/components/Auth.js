import React from "react";
import '../App.css'
import axios from 'axios';


class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

    state = {
      first_name: '',
      last_name: '',  
      sign_up_email: '',
      sign_up_password: '',
      password_confirmation: '',
      registrationErrors: '',
      login_email: '',
      login_password: '',
      isActive: false
    }

    handleSignupSubmit=(e) => {
        
      axios.post("http://localhost:3000/registrations", {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.sign_up_email, 
        password: this.state.sign_up_password, 
        password_confirmation: this.state.password_confirmation
      },
      { withCredentials: true } 
      )
      .then(response => {
          if (response.data.status === 'created') {
           
         this.props.handleSuccessfulSignup(response.data);
          }
      })
      .catch(error => {console.log("registration error", error)
    })
    e.preventDefault()
    }

    handleLoginSubmit=(e) => {
        
      axios.post("http://localhost:3000/sessions", {

        email: this.state.login_email, 
        password: this.state.login_password, 
      
      },
      { withCredentials: true } 
      )
      .then(response => {
        
          if (response.data.logged_in === true) {
           
         this.props.handleSuccessfulSignup(response.data);
          }
      })
      .catch(error => {console.log("login error", error)
    })
    e.preventDefault()
    }
    
    handleSignupChange=(e)=> {
    console.log(e.target.value)
    this.setState({
        [e.target.name]: e.target.value
    })
    }
    
    signUpRight= () => {
     
      this.setState({
        isActive: true
      })
    }
    signInLeft= () => {
      this.setState({
        isActive: false
      })
    }

  
  render() {
   console.log(this.props)
    return (
      <div className= "page-container">
      <div className={this.state.isActive ? "right-panel-active" : null} id="container">
	<div className="form-container sign-up-container">
		<form onSubmit={this.handleSignupSubmit} action="#">
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			{/* <span>or use your email for registration</span> */}
			<input type="text" name="first_name"placeholder="First Name" value={this.state.first_name} onChange={this.handleSignupChange} required/>
			<input type="text" name="last_name"placeholder="Last Name" value={this.state.last_name} onChange={this.handleSignupChange} required/>
      <input type="email" name="sign_up_email" placeholder="Email" value={this.state.sign_up_email} onChange={this.handleSignupChange} required/>
			<input type="password" name="sign_up_password" placeholder="Password" value={this.state.sign_up_password} onChange={this.handleSignupChange} required />
			<input type="password" name="password_confirmation" placeholder="Password Confirmation" value={this.state.password_confirmation} onChange={this.handleSignupChange} required />
      {/* <input type="text" placeholder="Bio" />
      <input type="file" placeholder="Profile Pic" /> */}
      
			<button type="submit">Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form onSubmit={this.handleLoginSubmit} action="#">
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			{/* <span>or use your account</span> */}
      <input type="email" name="login_email" placeholder="Email" value={this.state.login_email} onChange={this.handleSignupChange} required/>
      <input type="password" name="login_password" placeholder="Password" value={this.state.login_password} onChange={this.handleSignupChange} required />
			{/* <a href="#">Forgot your password?</a> */}
			<button type="submit">Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>Sign in to find and create pickup games in your area!</p>
				<button onClick={() => this.signInLeft()} className="ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Get connected to pickup sports events near you by creating an account!</p>
				<button onClick={() => this.signUpRight()} className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
</div>
    );
  }
}

export default Auth;
