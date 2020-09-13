import React from 'react';
import Navbars from '../../components/Navbar/Navbar';
import Sidebars from '../../components/Sidebar/Sidebar';
import './Layout.css';

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";

class Layout extends React.Component {
    render() {
        const { authenticated } = this.props;
        return (
            <div>
                <Navbars authenticated={authenticated} logout={this.props.logout} />
                <Sidebars />
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Layout)
);