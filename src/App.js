import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import './App.css';
import Header from './components/Header/Header';
import VideoList from './components/VideoList';
import VideoView from './pages/VideoView/VideoView';

const API_URL = '/database.json';

class App extends Component {

  state = {
    videos: [{
      url: ''
    }],
    loading: true
  };

  componentDidMount() {
      fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
          this.setState({
              videos: data
          },() => this.setState({ loading: false }));
      });
  }

  render () {
    const { videos, loading } = this.state;

    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/video/:id"><VideoView videos={videos} loadingData={loading}/></Route>
            <Route path="/about"><About /></Route>
            <Route exact path="/"><VideoList videos={videos} loadingData={loading}/></Route>
            <Route path="*"><Page404 /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
