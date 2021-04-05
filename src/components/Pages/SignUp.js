import React from 'react'
import './Signup.css'
import '../../app.css'
function SignUp(){
    return (
        <div className='container'>
        <div className="login-box">
    <div className="left">
    <h1 className="title">Sign up</h1>
    <input type="text" name="username" placeholder="Username" />
    <input type="text" name="email" placeholder="E-mail" />
    <input type="password" name="password" placeholder="Password" />
    <input type="password" name="password2" placeholder="Retype password" />
    <input type="submit" name="signup_submit" value="Sign me up" className='submit-btn'/>
    </div>

    <div className="right">
    <span className="loginwith">Sign Up With<br/>social network</span>
    <button className="social-signin facebook"><i className="fab fa-facebook icons"/>Log in with facebook</button>
    <button className="social-signin twitter"><i className="fab fa-twitter icons"/>Log in with Twitter</button>
    <button className="social-signin google"><i className="fab fa-google-plus icons"/>Log in with Google+</button>
    </div>
    <div className="or">OR</div>
</div>
</div>
    )
}

export default SignUp;