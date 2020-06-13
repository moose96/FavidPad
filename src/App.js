import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import classnames from 'classnames';

import Header from './components/template/Header';
import Content from './components/template/Content';
import Footer from './components/template/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import VideoView from './pages/VideoView';
import VideoCreateForm from './components/forms/VideoCreateForm';
import './App.scss';

function App() {
  const [customHeight, setCustomHeight] = useState(false);

  const handleCustomHeight = (customH) => {
    setCustomHeight(customH);
  }

  const classes = classnames('App',{
    'h-auto': customHeight
  })

  return (
    <Router>
      <div className={classes}>
        <Header />
        <Content onCustomHeight={handleCustomHeight}>
          <Route exact path="/video/create" component={VideoCreateForm} />
          <Route exact path="/video/:id/update" component={VideoCreateForm} />
          <Route path="/video/:id" component={VideoView} />
          <Route path="/about"><About /></Route>
          <Route exact path="/"><Home /></Route>
          <Route path="*"><Page404 /></Route>
        </Content>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
