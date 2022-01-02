/* eslint-disable require-jsdoc */
import React from 'react';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state={
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({email: '', password: ''});
  };

  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">
            I already have an account
        </h2>
        <span className="subtitle">
            Sign in with your email and password
        </span>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required />
          <label>Email</label>
          <input
            name="password"
            type="pasword"
            value={this.state.password}
            onChange={this.handleChange}
            required />
          <label>Password</label>
          <input type="submit" value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;
