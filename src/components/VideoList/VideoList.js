import React,{Component} from 'react';

import Video from '../Video';

const API_URL = '/database.json';

class VideoList extends Component {
    state = {
        videos: []
    };

    componentDidMount() {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                videos: data
            });
        });
    }

    render() {
        const { videos } = this.state;

        return (
            <div className="video-list">
                {videos.map((element,index) => (
                    <Video key={index} {...element}/>
                ))}
            </div>
        );
    }
}

export default VideoList;