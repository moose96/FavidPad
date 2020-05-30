import React,{ Component, Fragment } from 'react';

import Player from '../../components/Player';
import VideoUrlParser from '../../utility/urlparser/';
import FakeAPIServer from '../../utility/FakeAPIServer';

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

class VideoView extends Component {
    constructor(props) {
        super(props);

        this.fakeApi = new FakeAPIServer();
        this.parser = new VideoUrlParser();
        this._component = null;
    }

    state = {
        video: null,
        loading: true
    }

    componentDidMount() {
        this.fakeApi.get({ id: this.props.match.params.id })
        .then(data => {
            let _video = null;

            if (data.type !== 'error') {
                _video = {...data.data};
                _video.url = this.parser.parse(_video.url);
            }

            this.setState({
                video: _video
            },() => this.setState({ loading: false }));
        })
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
            <div className="player-wrapper">
                {this._component}
            </div>
        );
    }
}

export default VideoView;