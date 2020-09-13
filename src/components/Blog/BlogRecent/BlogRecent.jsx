import React from 'react';
import Nature from '../../../assets/img1.jpg';
import './BlogRecent.css';

const BlogRecent = (props) => {
    return (
        <div>
            <div className="BlogRecent mt-5">
                <div className="header">
                    <h1>Recent Post</h1>
                </div>
            </div>
            <div className="row m-auto">
                <div className="col-6 col-md-4 col-lg-3">
                    <div className="contentWrapper">
                        <div className="content">
                            <div className="kategori">kategori</div>
                            <img src={Nature} alt="" />
                            <h3>Judul</h3>
                            <p>Penulis</p>
                            <p>Datetime</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                    <div className="contentWrapper">
                        <div className="content">
                            <div className="kategori">kategori</div>
                            <img src={Nature} alt="" />
                            <h3>Judul</h3>
                            <p>Penulis</p>
                            <p>Datetime</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                    <div className="contentWrapper">
                        <div className="content">
                            <div className="kategori">kategori</div>
                            <img src={Nature} alt="" />
                            <h3>Judul</h3>
                            <p>Penulis</p>
                            <p>Datetime</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                    <div className="contentWrapper">
                        <div className="content">
                            <div className="kategori">kategori</div>
                            <img src={Nature} alt="" />
                            <h3>Judul</h3>
                            <p>Penulis</p>
                            <p>Datetime</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogRecent;