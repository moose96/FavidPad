import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

// import VideoList from './components/VideoList';
import './App.css';
import VideoUrlParser from './utility/urlparser/';
// import Player from './components/Player/';

// const API_URL = '/database.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.parser = new VideoUrlParser();
  }

  // state = {
  //   videos: [{
  //     url: ''
  //   }],
  //   currentVideo: 0
  // };

  // componentDidMount() {
  //     fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //         this.setState({
  //             videos: data
  //         });
  //     });
  // }

  // handleVideoClick = (id) => {
  //   this.setState({
  //     currentVideo: id
  //   });
  // }

  render () {
    // const { videos, currentVideo } = this.state;

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/about"><About /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
          {/*<VideoList videos={videos} currentVideo={currentVideo} onVideoClick={this.handleVideoClick}/>
          <div className="player-wrapper">
            <div className="player">
              <Player source={this.parser.parse(videos[currentVideo].url)} />
            </div>
            <h2>{videos[currentVideo].title}</h2>
            <p>{videos[currentVideo].description}</p>
          </div> */}
        </div>
      </Router>
    );
  }
}

export default App;
