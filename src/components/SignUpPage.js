import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startSignUpUser } from '../actions/auth';

export class SignUpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            error: ''
        };
    }

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    };

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        this.setState(() => ({ confirmPassword }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.username || 
            !this.state.email || 
            !this.state.password || 
            !this.state.confirmPassword
        ) {
            this.setState(() => ({ error: 'Please provide an email, username and password.'}));
        } else if (this.state.password !== this.state.confirmPassword) {
            this.setState(() => ({ error: 'Passwords do not match.'}));
        } else {
            this.setState(() => ({ error:'' }));
            this.props.startSignUpUser(this.state.email, this.state.password);
        }
    };

    render () {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>
                    <h3 className="box-layout__subtitle">Sign Up</h3>
                    <form id="signUpForm" className="form" onSubmit={this.onSubmit}>
                        {this.state.error && <p className="form__error">{this.state.error}</p>}
                        <input
                            className="text-input"
                            type="text"
                            placeholder="Full Name"
                            autoFocus
                            value={this.state.username}
                            onChange={this.onUsernameChange}
                        />
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
                        <input
                            className="text-input"
                            type="password"
                            placeholder="Confirm Password"
                            autoFocus
                            value={this.state.confirmPassword}
                            onChange={this.onConfirmPasswordChange}
                        />
                        <div>
                            <button className="button">Sign Up</button>
                        </div>
                    </form>
                    <Link className="button button-text button--link" to="/">
                      Already a user? Sign In
                    </Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startSignUpUser: (email, password) => dispatch(startSignUpUser(email, password))
});

export default connect(undefined, mapDispatchToProps)(SignUpPage);