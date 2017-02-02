import React, { Component }  from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import "./login.css";
import Input from '.././components/Input/Input.js';
import Button from '.././components/Button/Button.js';


  class Login extends Component {
    constructor(props) {
      super(props);
      //durumlara gore hareket edebilmek icin ve data paslamak icin state tanimliyoruz
      this.state = {disable: false, email: "", password: "", msg: "", showLoading: false};

      //fonksiyonlarimizi bind ediyoruz
      this.login = this.login.bind(this);
      this.updateInputValueEmail = this.updateInputValueEmail.bind(this)
      this.updateInputValuePass = this.updateInputValuePass.bind(this)
    }

    //input value degerlerini aliyoruz
    updateInputValueEmail(evt) {
      this.setState({
        email: evt.target.value
      });
    }

    //input value degerlerini aliyoruz
    updateInputValuePass(evt) {
      this.setState({
        password: evt.target.value
      });
    }

    login() {
      this.setState({showLoading: true});
      axios.post('http://178.62.67.44:9999/brickly/account/user/token_auth', {
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response) {
        //console.log(response.statusText);
        this.setState({showLoading: false});
        this.setState({msg: response.data.message});

      }.bind(this))
      .catch(function (error) {
        //console.log(error.response)
        this.setState({showLoading: false});
        this.setState({msg: error.response.data.message});
      }.bind(this))
    }

    render() {
      return (
        <div className="login-page">
          <div className="content">
            <h1>Lines</h1>
            <div className="text">
              Welcome back, <br/>
              <span>sign in to continue <br/>
              to Lines.</span>
            </div>
            <form className="mt-50">
              <Input placeholder="Email" type="text" className="mb-20" spanClass="underline pull-left" onChange={this.updateInputValueEmail}/>
              <Input placeholder="Password" type="password" spanClass="underline pull-right" onChange={this.updateInputValuePass}/>
              <span className="msg mt-15">{this.state.msg}</span>
              <Button type="button" onClick={this.login} value="Login" disable={this.state.disable} />
            </form>
            { this.state.showLoading ? <div className="loading"></div> : null }
          </div>
        </div>
      );
    }
  }

export default Login;
