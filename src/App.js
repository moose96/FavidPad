import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';

import Header from './ui/components/layout/Header';
import Content from './ui/components/layout/Content';
import Footer from './ui/components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import VideoView from './pages/VideoView';
import VideoFormContainer from './form/containers/VideoFormContainer';
import './App.scss';

function App({ customHeight }) {
  const classes = classnames('App',{
    'h-auto': customHeight
  })

  return (
    <Router>
      <div className={classes}>
        <Header />
        <Content>
          <Route exact path="/video/create" component={VideoFormContainer} />
          <Route exact path="/video/:id/update" component={VideoFormContainer} />
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

const mapStateToProps = state => ({
  customHeight: state.content.customHeight
})

export default connect(mapStateToProps)(App);
