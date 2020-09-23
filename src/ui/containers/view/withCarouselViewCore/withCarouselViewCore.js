import React from 'react';
import { connect } from 'react-redux';

import { setCurrentChild } from './redux';

function withCarouselViewCore(WrappedComponent) {
  class CarouselViewCore extends React.Component {
    render() {
      return(
        <WrappedComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = state => ({
    currentChild: state.ui.carouselView.currentChild
  });

  const mapDispatchToProps = dispatch => ({
    setCurrentChild: data => dispatch(setCurrentChild(data))
  });

  return connect(mapStateToProps, mapDispatchToProps)(CarouselViewCore);
}

export default withCarouselViewCore;