import React from "react";
import '../App.css'


class Auth extends React.Component {
  

    state = {
      username: '',
      password: '',
      isActive: false
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
   
    return (
      <div className= "page-container">
      <div className={this.state.isActive ? "right-panel-active" : null} id="container">
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			{/* <span>or use your email for registration</span> */}
			<input type="text" placeholder="Name" />
			<input type="password" placeholder="Password" />
      <input type="text" placeholder="Bio" />
      <input type="file" placeholder="Profile Pic" />
      
			<button>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			{/* <span>or use your account</span> */}
			<input type="text" placeholder="Name" />
			<input type="password" placeholder="Password" />
			{/* <a href="#">Forgot your password?</a> */}
			<button>Sign In</button>
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
