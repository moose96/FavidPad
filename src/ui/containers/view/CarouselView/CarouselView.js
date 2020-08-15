import React, { useState, cloneElement, Fragment } from 'react';
import { connect } from 'react-redux';

import { setCurrentChild } from './redux';
import './CarouselView.scss';
import SfxPlayer from '../../multimedia/SfxPlayer';
import click from '../../../../assets/sfx/click.wav';

function CarouselView({ children, currentChild, setCurrentChild }) {
  // const [currentChild, setCurrentChild] = useState(0);
  const [lastTouchXValue, setLastTouchXValue] = useState(0);

  const handleVideoClick = (id) => {
    let index = children.findIndex((element) => element.props.video.id === id);
    setCurrentChild(index);
  }

  const calculateNewVideoIndex = (delta) => {
    const newIndex = delta > 0 ? currentChild + 1 : currentChild - 1;

    if (newIndex >= 0 && newIndex < children.length) {
      setCurrentChild(newIndex);
    } else if (newIndex > 0) {
      setCurrentChild(children.length - 1);
    } else if (newIndex < 0) {
      setCurrentChild(0);
    }
  }

  const handleMouseWheel = (event) => {
    calculateNewVideoIndex(Math.floor(event.deltaY) / 2);
  }

  const handleTouchStart = (event) => {
    setLastTouchXValue(event.changedTouches[0].clientX);
  }

  const handleTouchCancel = (event) => {
    const delta = lastTouchXValue - event.changedTouches[0].clientX;
    if (Math.abs(delta) > 5) {
      calculateNewVideoIndex(delta);
    }
  }

  return (
    <div className="carousel-view"
      onWheel={handleMouseWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchCancel} >

      {children.map((element, index, table) => {
        let translateX, scale, style;

        if (index !== currentChild) {
          translateX = Math.cbrt(index - currentChild) * 75;
          scale = 0.9 ** Math.abs(index - currentChild);

          style = {
            transform: `translateX(${translateX}%) scale(${scale})`,
          }
        }

        style = {
          ...style,
          zIndex: table.length - Math.abs(index - currentChild)
        }

        let active = false;
        let allowClick = false;
        if (index === currentChild) {
          active = true;
          allowClick = true;
        }

        return (
          <Fragment>
            <SfxPlayer src={click} >
              {cloneElement(element, {
                key: `carousel-view-${element.key}`,
                active,
                allowClick,
                style,
                className: 'carousel-view__element',
                onClick: handleVideoClick
              })}
            </SfxPlayer>
          </Fragment>
        )
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentChild: state.ui.carouselView.currentChild
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentChild: data => dispatch(setCurrentChild(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselView);