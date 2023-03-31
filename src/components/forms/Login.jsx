import React from 'react';
import './login.css';

function LoginForm() {
  function generateCaptcha() {
    // Code for generating captcha
  }

  function validateCaptcha() {
    // Code for validating captcha
  }

  function route() {
    // Code for routing to forgot password page
  }

  return (
    <div className="login-container">
      <h2 id="heading">Login</h2>
      <p id="signup-link">
        Don't have an account?<a href="/training/registration">SignUp</a>
      </p>
      <form className="login-form">
        <div className="input">
          <input type="text" placeholder="Email" name="email" className="user-details" id="email" />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" name="password" className="user-details" id="password" />
        </div>
        {/* <div className="input">
          <select name="user-type" id="user-type">
            <option value="user-type" selected disabled>User Type</option>
            <option value="student">Student / Departmental Student</option>
            <option value="faculty">Faculty</option>
          </select>
        </div> */}
        {/* <iframe className='captchaframe' src="" frameborder="0"></iframe> */}
        <div className="input">
          <div className="mainContainer" id="CaptchaBlock">
            <div className="captcha_div">
              <div className="form_div"><br/>
                <input type="text" name="userInput" id="userInput" placeholder="Enter text" />
                <canvas id="canvas" className="canvas"> </canvas>
                <i className="fa fa-refresh reload" onClick={generateCaptcha} aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value="Login" name="submit" className="user-details" id="log-button" onClick={validateCaptcha} />
        <div className="error-div"></div>
        <div className="signUp-div">
          <p id="signup-link">
            Don't have an account?<a href="/training/registration">SignUp</a>
          </p>
          <a href="/forms/forgetpassword" style={{marginLeft: 0}} onClick={route}>Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
