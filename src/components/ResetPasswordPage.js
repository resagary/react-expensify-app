import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startPasswordReset } from '../actions/auth';

export class ResetPasswordPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            error: ''
        };
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.email) {
            this.setState(() => ({ error: 'Please provide an email.'}));
        } else {
            this.setState(() => ({ error:'' }));
            this.props.startPasswordReset(this.state.email).then(() => {
                this.props.history.push('/');
            });
        }
    };

    render () {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>
                    <h3 className="box-layout__subtitle">Reset Password</h3>
                    <form id="resetPasswordForm" className="form" onSubmit={this.onSubmit}>
                        {this.state.error && <p className="form__error">{this.state.error}</p>}
                        <input
                            className="text-input"
                            type="text"
                            placeholder="Email"
                            autoFocus
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        />
                        <div>
                            <button className="button">Reset</button>
                        </div>
                    </form>
                    <Link className="button button-text button--link" to="/">
                      Sign In
                    </Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startPasswordReset: (email) => dispatch(startPasswordReset(email))
});

export default connect(undefined, mapDispatchToProps)(ResetPasswordPage);