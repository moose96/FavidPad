import React from 'react';
import { Link } from 'react-router-dom';

import VideoUrlParser from '../../utility/urlparser/';
import './Video.css';

function Video({ title, description, url, id, active }) {
    const parser = new VideoUrlParser();

    return (
        <Link to={`/video/${id}`} className={`video ${active && 'active'}`} >
            <img src={parser.parseThumb(url)} alt="thumb"/>
            <div className="video-info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default Video;