import React from 'react';
import { useHistory } from 'react-router-dom';

import VideoUrlParser from '../../utility/urlparser/';
import './Video.css';

function Video({ title, description, video_url, id, active }) {
    const parser = new VideoUrlParser();
    let history = useHistory();

    const handleClick = () => {
        history.push(`/video/${id}`);
    }

    return (
        <div className='video' onClick={handleClick}>
            <img src={parser.parseThumb(video_url)} alt="thumb"/>
            <div className="video-info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Video;