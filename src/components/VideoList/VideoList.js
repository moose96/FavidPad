import React,{ useState, useEffect} from 'react';

import Video from '../Video';
import './VideoList.css';

function VideoList(/*{ videos, currentVideo }*/) {
    const [videos, setVideos] = useState([{ video_url: ''}]);

    useEffect(() => {
        fetch('http://localhost:3000/v1/movies')
        .then(response => response.json())
        .then(data => setVideos(data));
    },[]);

    return (
        <div className="video-list-wrapper">
            <h3>Filmy</h3>
            <div className="video-list">
                {videos.map((element) => (
                    <Video key={`video-${element.id}`} active={element.id === 1} {...element} />
                ))}
            </div>
        </div>
    );
}

VideoList.defaultProps = {
    currentVideo: 0
}

export default VideoList;