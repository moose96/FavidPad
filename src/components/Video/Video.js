import React from 'react';

import VideoUrlParser from '../../utility/urlparser/';
import './Video.css';

function Video({ title,description,url,id, active,onClick }) {
    const parser = new VideoUrlParser();

    const onVideoClick = () => {
        onClick(id);
    }

    return (
        <div className={`video ${active && 'active'}`} onClick={onVideoClick}>
            <img src={parser.parseThumb(url)} alt="thumb"/>
            <div className="video-info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Video;