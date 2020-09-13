import React, { Component } from 'react';
import './Login.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authLogin } from "../../store/actions/auth";

class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.login(username, password);
    };

    render() {
        const { error, loading, token } = this.props;
        const { username, password } = this.state;
        console.log(loading)
        if (token) {
            return <Redirect to="/" />;
        }
        return (
            <div className="Login">
                <div className="Login__Wrapper">
                    {error && <p>{this.props.error.message}</p>}
                    <div className="Login__title">
                        <h1>Login</h1>
                    </div>
                    <form className="Login__form" action="POST" method="post" onSubmit={this.handleSubmit}>
                        <div className="Login__input">
                            <input type="text" value={username} name="username" placeholder="username" onChange={this.handleChange} />
                            <MailOutlineIcon className="Icon" />
                        </div>
                        <div className="Login__input">
                            <input type="password" value={password} name="password" placeholder="password" onChange={this.handleChange} />
                            <HttpsOutlinedIcon className="Icon" />
                        </div>
                        <button className="btn btn-outline-info btn__rounded" type="submit">Submit</button>
                    </form>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(authLogin(username, password))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);