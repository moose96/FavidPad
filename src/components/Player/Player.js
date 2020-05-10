import React, {Component} from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import './Player.css';

class Player extends Component {

    loadSource = (source) => {
        this.player.source = source;
    }

    componentDidMount() {
        this.player = new Plyr('.js-player',this.props.options);
        this.loadSource(this.props.source);
    }

    componentDidUpdate() {
        this.loadSource(this.props.source);
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    render () {
        return (
            <video className="js-player player" >
            </video>
        );
    }
}

export default Player;