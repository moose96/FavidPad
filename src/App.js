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
import Header from './components/Header/Header';
import VideoList from './components/VideoList';
import VideoView from './pages/VideoView/VideoView';
import VideoCreateForm from './components/VideoCreateForm/VideoCreateForm';
import './App.css';

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
            <Route exact path="/video/create" component={VideoCreateForm} />
            <Route exact path="/video/:id/update" component={VideoCreateForm} />
            <Route path="/video/:id" component={VideoView} />
            <Route path="/about"><About /></Route>
            <Route exact path="/"><VideoList /></Route>
            <Route path="*"><Page404 /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
