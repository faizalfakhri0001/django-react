import React from 'react';
import './Navbar.css';
import { FaGoogle, FaInstagram, FaPen } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbars = (props) => {
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="itemWrapper ml-auto">
                <div className="IconWapper">
                    <div className="Icon">
                        <FaGoogle />
                    </div>
                    <div className="Icon">
                        <FaInstagram />
                    </div>
                    {
                        props.authenticated ?
                            <div className="IconWapper">
                                <div className="Icon">
                                    <FaPen />
                                </div>
                                <div className="Icon" onClick={props.logout}>
                                    Logout
                                </div>
                            </div>
                            :
                            <Link to="/login">
                                <div className="Icon">
                                    Login
                                </div>
                            </Link>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbars;