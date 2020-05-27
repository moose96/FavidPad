import React from 'react';

import Video from '../Video';
import './VideoList.css';

function VideoList({ videos,currentVideo,onVideoClick }) {
    return (
        <div className="video-list-wrapper">
            <h3>Filmy</h3>
            <div className="video-list">
                {videos.map((element,index) => (
                    <Video key={`video-${index}`} active={index === currentVideo} {...element}
                            id={index} onClick={onVideoClick}/>
                ))}
            </div>
        </div>
    );
}

VideoList.defaultProps = {
    currentVideo: 0
}

export default VideoList;