import React, {useState} from 'react'

class Login extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        name: null,
        password: null,
        userName: 'Dale Cooper',
        isLoggedIn: false,
        error: null
      };
    
      this.correctLogin = {
        name: 'kp',
        password: 'admin'
      }
    }
    
    handleNameChange(event) {
      this.setState({
        name: event.currentTarget.value
      });
    }
    
    handlePasswordChange(event) {
      this.setState({
        password: event.currentTarget.value
      });
    }
    
    handleSubmit() {
      const {name, password} = this.state;
      
      if (name === this.correctLogin.name && password === this.correctLogin.password) {
        this.setState({
          isLoggedIn: true        
        });
      } else {
        this.setState({
          isLoggedIn: false,
          error: 'incorrect login'
        });
      }
    }
    welcomeUser() {
      return (
        <div>{`Welcome ${this.state.userName}! `}
        <a href="javascript:;" onClick={this.signOut.bind(this)}>Sign out</a>
        </div>
      );
    }
    signOut() {
        const {name, password} = this.state;
        // clear out user from state
        this.setState({ isLoggedIn: false})
      }
      
    loginError() {
      if (this.state.error) {
        return (
          <div>
            <ul id="text-input-error-description-list">
            <li><span class="inline-error-icon" aria-hidden="true">!</span><span class="screenreader-only">Error: </span>{this.state.error}</li>
            </ul>
          </div>
        );
      }
      
      return;
    }
  
    renderLogin() {
      return (
          <form autoComplete="off" className="signon-form" id="signonheaderform" method="post" name="memberSignOn" noValidate="novalidate">
              <div className="button-group">
                <label htmlFor="userid">User ID</label> 
                <input autoFocus="autofocus" className="form-textbox" id="userid" name="username" placeholder="User ID" required="required" type="text" onChange={this.handleNameChange.bind(this)} />
              </div>
              <div className="button-group">
                <label htmlFor="password">Password</label> 
                <input id="password" name="password" placeholder="Password" required="required" type="password" onChange={this.handlePasswordChange.bind(this)} />
              </div>
              <button className="button headersignon" data-feature="Sign On Header" data-track-link="Sign on" id="Submit" name="signonButton" onClick={this.handleSubmit.bind(this)}>Sign in</button>
            {this.loginError()}
          </form>

      );
    }  
    
    
    
    render() {
      const currentView = (this.state.isLoggedIn) ? this.welcomeUser() : this.renderLogin(); 
      return (
        <div className="login-group">
          {currentView}
        </div>
      );
    }
  }
export default Login
