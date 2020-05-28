import React,{Fragment} from 'react';
import {
    useParams
} from 'react-router-dom';

import Player from '../../components/Player';
import VideoUrlParser from '../../utility/urlparser/';

const IsVideo = ({ video }) => (
    <Fragment>
        <div className="player">
            <Player source={video.url} />
        </div>
        <h2>{video.title}</h2>
        <p>{video.description}</p>
    </Fragment>
)

const NoVideo = ({ text }) => <h2>{text}</h2>;

function VideoView ({ videos, loadingData }) {
    const { id } = useParams();
    const parser = new VideoUrlParser();

    let _component;

    if (!loadingData) {
        let video = videos.find( video => video.id === id );

        if (video) {
            video.url = parser.parse(video.url);
            _component = <IsVideo video={video} />;
        } else {
            _component = <NoVideo text="Nie znaleziono filmu" />
        }

    } else {
        _component = <NoVideo text="Loading..."/>;
    }

    return (
        <div className="player-wrapper">
            {_component}
        </div>
    );
}

export default VideoView;