import React, { Component } from 'react';
import './Home.css';
import BlogRecent from '../../components/Blog/BlogRecent/BlogRecent';
import UserTag from '../../components/Blog/UserTag/UserTag';
import Chat from '../../components/Chat/Chat';
import Gallery from '../../components/Gallery/Gallery'

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Chat />
                <UserTag authenticated={this.props.authenticated} />
                <BlogRecent />
                <Gallery />
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.token !== null
    };
};

export default withRouter(
    connect(
        mapStateToProps,
    )(Home)
);