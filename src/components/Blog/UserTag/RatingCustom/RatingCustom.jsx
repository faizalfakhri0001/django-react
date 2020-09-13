import React from 'react';
import './RatingCustom.css';
import { Rating } from 'semantic-ui-react'

const UserTag = ({ name, defRating, maxRating }) => {
    return (
        <div className="User__parameter">
            <div className="content">
                <div className="title">
                    {name}
                </div>
                <div className="rating__bar">
                    <Rating icon='star' defaultRating={defRating} maxRating={maxRating} />
                </div>
            </div>
        </div>
    )
}

export default UserTag;