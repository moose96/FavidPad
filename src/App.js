import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

 import Home from './pages/Home';
import Content from './components/Content';
import About from './pages/About';
import Page404 from './pages/Page404';
import Header from './components/Header/Header';
import VideoList from './components/VideoList';
import VideoView from './pages/VideoView/VideoView';
import VideoCreateForm from './components/VideoCreateForm/VideoCreateForm';
import './App.css';

const API_URL = '/database.json';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Header />
          <Content>
            <Route exact path="/video/create" component={VideoCreateForm} />
            <Route exact path="/video/:id/update" component={VideoCreateForm} />
            <Route path="/video/:id" component={VideoView} />
            <Route path="/about"><About /></Route>
            <Route exact path="/"><Home /></Route>
            <Route path="*"><Page404 /></Route>
          </Content>
        </div>
      </Router>
    );
  }
}

export default App;
