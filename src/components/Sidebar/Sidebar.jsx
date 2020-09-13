import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaBlogger, FaProjectDiagram, FaGithub, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebars = (props) => {
    const [IsOpen, setIsOpen] = useState(false)


    return (
        <div className={`sidebar bg-dark ${IsOpen ? "openSide" : null}`}>
            <div className="d-flex justify-content-between p-2">
                {
                    IsOpen ?
                        <div className="sidebar__wapperOpen">
                            <div className="sidebar__wapperHeader">
                                <div className="sidebar__Icon">
                                    <FaBars onClick={() => setIsOpen(!IsOpen)} />
                                </div>
                                <div className="sidebar__title">Mysite</div>
                            </div>

                            <div className="sidebar__wapperContent">
                                <div className="sidebar__wapperIcon">
                                    <Link to="/">
                                        <div className="sidebar__Icon">
                                            <FaHome />
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="sidebar__Icontitle">Home</div>
                                    </Link>
                                </div>
                                <div className="sidebar__wapperIcon">
                                    <div className="sidebar__Icon"><FaBlogger /></div>
                                    <div className="sidebar__Icontitle">Blog</div>
                                </div>
                                <div className="sidebar__wapperIcon">
                                    <div className="sidebar__Icon"><FaProjectDiagram /></div>
                                    <div className="sidebar__Icontitle">Project</div>
                                </div>
                            </div>

                            <div className="sidebar__wapperFooter">
                                <div className="sidebar__wapperIcon">
                                    <div className="sidebar__footerIcon"><FaGithub /></div>
                                    <div className="sidebar__footerTitle">Github</div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="sidebar__wapperClose">
                            <div className="sidebar__wapperHeader">
                                <div className="sidebar__Icon"><FaBars onClick={() => setIsOpen(!IsOpen)} /></div>
                            </div>

                            <div className="sidebar__wapperContent">
                                <div className="sidebar__wapperIcon">
                                    <Link to="/">
                                        <div className="sidebar__Icon">
                                            <FaHome />
                                        </div>
                                    </Link>
                                </div>
                                <div className="sidebar__wapperIcon">
                                    <div className="sidebar__Icon"><FaBlogger /></div>
                                </div>
                                <div className="sidebar__wapperIcon">
                                    <div className="sidebar__Icon"><FaProjectDiagram /></div>
                                </div>
                            </div>

                            <div className="sidebar__wapperFooter">
                                <div className="sidebar__wapperIcon">
                                    <div className="sidebar__footerIcon"><FaGithub /></div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}

export default Sidebars;