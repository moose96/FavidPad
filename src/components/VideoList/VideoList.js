import React,{ useState, useEffect} from 'react';

import Video from '../Video';
import FakeAPIServer from '../../utility/FakeAPIServer';
import './VideoList.css';

function VideoList(/*{ videos, currentVideo }*/) {
    const [videos, setVideos] = useState([{ url: ''}]);
    const fakeApi = new FakeAPIServer();

    useEffect(() => {
        fakeApi.get()
        .then(data => {console.log(data);setVideos(data.data);});
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