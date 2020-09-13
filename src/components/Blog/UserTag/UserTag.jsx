import React, { useRef, useState, useEffect } from 'react';
import './UserTag.css';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import RatingCustom from "./RatingCustom/RatingCustom";

import axios from 'axios';
import { endpoint } from "../../../constants";

const UserTag = (props) => {
    const [Profile, setProfile] = useState('');

    const getProfile = async (id) => {
        await axios.get(`${endpoint}/profile/${id}`)
            .then((res) => {
                setProfile(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleFile = (file) => {
        let FormFile = new FormData();
        FormFile.append('user', Profile.user)
        FormFile.append('image', file, file.name);
        axios.put(`${endpoint}/profile/2`, FormFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                getProfile(2);
            })
            .catch(err => console.log(err))
    }

    const handleChange = event => {
        event.preventDefault();
        const fileUploaded = event.target.files[0];
        handleFile(fileUploaded);
    };

    useEffect(() => {
        getProfile(2);
    }, []);

    return (
        <div>
            <div className="row m-auto align-items-center">
                <div className="col-12 col-md-6">
                    <div className="User__tag">
                        <div className="content">
                            <div className="avatar">
                                <img src={Profile.image} alt="" />
                                {
                                    props.authenticated ?
                                        <AddAPhotoIcon onClick={handleClick} />
                                        : null
                                }
                                <input type="file"
                                    style={{ display: "none" }}
                                    ref={hiddenFileInput}
                                    onChange={handleChange} />
                            </div>
                            <div className="name">
                                <p>{`${Profile.first_name} ${Profile.last_name}`}</p>
                            </div>
                            <div className="desc">
                                <p>Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ea animi voluptate quo
                                Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ea animi voluptate quo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-4">
                    <RatingCustom name="CorelDraw" defRating={3} maxRating={5} />
                    <RatingCustom name="Python" defRating={1} maxRating={5} />
                    <RatingCustom name="Javascript" defRating={2} maxRating={5} />
                    <RatingCustom name="Arduino" defRating={4} maxRating={5} />
                </div>
            </div>
        </div>
    )
}

export default UserTag;