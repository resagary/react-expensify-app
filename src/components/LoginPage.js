import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startEmailLogin, startGoogleLogin } from '../actions/auth';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.email || !this.state.password) {
            this.setState(() => ({ error: 'Please provide an email, username and password.'}));
        } else {
            this.setState(() => ({ error:'' }));
            this.props.startEmailLogin(this.state.email, this.state.password).then(() => {
                console.log('User logged in.');
            }).catch((error) => {
                if (error.code === 'auth/user-not-found') {
                    this.setState(() => ({ error: 'There is no account with the email you\'ve entered.' }));
                }
                if (error.code === 'auth/wrong-password') {
                    this.setState(() => ({ error: 'The email or password is incorrect.' }));
                }
            });
        }
    };

    render () {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>
                    <p>Keep track of your expenses</p>
                    <form  id="emailLogin" className="form" onSubmit={this.onSubmit}>
                        <input
                          className="text-input"
                          type="text"
                          placeholder="Email"
                          autoFocus
                          value={this.state.email}
                          onChange={this.onEmailChange}
                        />
                        <input
                          className="text-input"
                          type="password"
                          placeholder="Password"
                          autoFocus
                          value={this.state.password}
                          onChange={this.onPasswordChange}
                        />
                        <div>
                            <button className="button">Login</button>
                        </div>
                        <div>
                            <Link className="button--forgotpw button--link" to="/reset-pw">
                              Forgot Password?
                            </Link>
                        </div>
                    </form>
                    <p>or login with</p>
                    <button
                      id="googleLogin" 
                      className="button-round" 
                      onClick={this.props.startGoogleLogin}
                    ><img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                    </button>
                    <Link className="button button-text button--link" to="/sign-up">
                      Don't have an account? Sign Up
                    </Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startEmailLogin: (email, password) => dispatch(startEmailLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);