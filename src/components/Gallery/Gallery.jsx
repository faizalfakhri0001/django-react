import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';
import Lightbox from 'react-awesome-lightbox';
import { Menu } from 'semantic-ui-react'

import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { endpoint } from "../../constants";

const Gallery = (props) => {

    const [Data, setData] = useState([{}]);
    const [OpenImg, setOpenImg] = useState(false);
    const [Display, setDisplay] = useState('');
    const [ActiveMenu, setActiveMenu] = useState('All');

    const getAll = async () => {
        await axios.get(`${endpoint}/picture/`)
            .then(res => {
                setData(res.data);
            }).catch(error => {
                console.log(error);
            })
    };

    useEffect(() => {
        getAll();
    }, []);

    const ShowImg = (event) => {
        setOpenImg(!OpenImg);
        setDisplay(Data[Number(event.target.id)]);
    }

    const hiddenFileInput = useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleFile = (file) => {
        let FormFile = new FormData();
        FormFile.append('image', file, file.name);
        axios.post(`${endpoint}/picture/`, FormFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data);
                getAll();
            })
            .catch(err => console.log(err))

    }

    const handleChange = event => {
        event.preventDefault();
        const fileUploaded = event.target.files[0];
        handleFile(fileUploaded);
    };

    const handleAvtiveMenu = (e, { name }) => setActiveMenu(name)

    const handleGalleryDelete = async (event) => {
        await axios.delete(`${endpoint}/picture/${event.target.id}`)
            .then(res => {
                console.log(res.status);
                getAll();
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mb-5">
            <div className="Portofolio mt-5">
                <div className="header">
                    <h1>Gallery</h1>
                </div>
            </div>
            <div className="MenuWrapper">
                <Menu tabular>
                    <Menu.Item
                        name='All'
                        active={ActiveMenu === 'All'}
                        onClick={handleAvtiveMenu}
                    />
                    <Menu.Item
                        name='Travel'
                        active={ActiveMenu === 'Travel'}
                        onClick={handleAvtiveMenu}
                    />
                    <Menu.Item
                        name='Programming'
                        active={ActiveMenu === 'Programming'}
                        onClick={handleAvtiveMenu}
                    />
                </Menu>
            </div>
            <div className="row mr-auto ml-auto mt-2 text-center p-2">
                {
                    OpenImg ?
                        <Lightbox image={Display.image} onClose={() => setOpenImg(!OpenImg)}></Lightbox>
                        :
                        null
                }
                {
                    Data.map((obj, idx) => {
                        return (
                            <div className="col-6 col-lg-2 col-md-3 col-sm-4 ContentWrapper" key={idx}>
                                <div className="Content">
                                    <img src={obj.image}
                                        alt="" onClick={ShowImg}
                                        id={idx} />
                                    {
                                        props.authenticated ?
                                            <DeleteForeverIcon id={obj.id} onClick={handleGalleryDelete} />
                                            : null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                {
                    props.authenticated ?
                        <div className="col-6 col-lg-2 col-md-3 col-sm-4 ContentWrapper">
                            <div className="Content__add">
                                <AddIcon onClick={handleClick} />
                                <input type="file"
                                    style={{ display: "none" }}
                                    ref={hiddenFileInput}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.token !== null
    };
};

export default withRouter(
    connect(
        mapStateToProps,
    )(Gallery)
);