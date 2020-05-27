import React, { Component } from 'react';
import {PlyrComponent} from 'plyr-react';

import VideoList from './components/VideoList';
import './App.css';
import VideoUrlParser from './utility/urlparser/';
import Player from './components/Player/';

const API_URL = '/database.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.parser = new VideoUrlParser();
    this.options = {...PlyrComponent.defaultProps.options};
    this.options.controls = [...this.options.controls,'play-large'];
  }

  state = {
    videos: [{
      url: ''
    }],
    currentVideo: 0
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

  handleVideoClick = (id) => {
    this.setState({
      currentVideo: id
    });
  }

  render () {
    const { videos, currentVideo } = this.state;

    return (
      <div className="App">
        <VideoList videos={videos} currentVideo={currentVideo} onVideoClick={this.handleVideoClick}/>
        <div className="player-wrapper">
          <div className="player">
            <Player source={this.parser.parse(videos[currentVideo].url)} />
          </div>
          <h2>{videos[currentVideo].title}</h2>
          <p>{videos[currentVideo].description}</p>
        </div>
      </div>
    );
  }
}

export default App;
