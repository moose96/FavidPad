import React,{ Component, Fragment } from 'react';

import { API_URL } from '../../global';
import Player from '../../components/Player';
import VideoUrlParser from '../../utility/urlparser/';
import './VideoView.scss';
import VideoList from '../../components/VideoList';

const IsVideo = ({ video }) => (
    <Fragment>
        <div className="video-view__player">
            <Player source={video.video_url} />
        </div>
        <div className="video-view__content">
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <h3>Kolejne filmy: </h3>
            <VideoList viewType="listView" />
        </div>
    </Fragment>
)

const NoVideo = ({ text }) => <h2>{text}</h2>;

class VideoView extends Component {
    constructor(props) {
        super(props);

        this.parser = new VideoUrlParser();
        this._component = null;
    }

    state = {
        video: null,
        loading: true
    }

    componentDidMount() { // potwór :(
        fetch(`${API_URL}/movies/${this.props.match.params.id}`)
        .then(response => {
            if(response.status === 200) {
                return response.json();
            } else {
                throw Error("not found");
            }
        })
        .then(data => {
            let _video = {...data};
            _video.video_url = this.parser.parse(data.video_url);

            this.setState({
                video: _video
            },() => this.setState({ loading: false }));
        })
        .catch(err => {
            console.log(err);
            this.setState({ loading: false });
        });
    }

    render () {
        if (!this.state.loading) {
            if (this.state.video) {
                this._component = <IsVideo video={this.state.video} />
            } else {
                this._component = <NoVideo text="Nie znaleziono filmu." />
            }
        } else {
            this._component = <NoVideo text="Loading..." />
        }

        return (
            <div className="video-view">
                {this._component}
            </div>
        );
    }
}

export default VideoView;