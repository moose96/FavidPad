import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './components/template/Header';
import Content from './components/template/Content';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import VideoView from './pages/VideoView';
import VideoCreateForm from './components/forms/VideoCreateForm';
import './App.css';

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
