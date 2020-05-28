import React from 'react';

import Video from '../Video';
import './VideoList.css';

function VideoList({ videos, currentVideo }) {
    return (
        <div className="video-list-wrapper">
            <h3>Filmy</h3>
            <div className="video-list">
                {videos.map((element) => (
                    <Video key={`video-${element.id}`} active={element.id === currentVideo} {...element} />
                ))}
            </div>
        </div>
    );
}

VideoList.defaultProps = {
    currentVideo: 0
}

export default VideoList;