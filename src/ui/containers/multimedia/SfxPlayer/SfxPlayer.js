import React, { Fragment, useRef, useEffect, cloneElement } from 'react';
import { connect } from 'react-redux';

function SfxPlayer({ children, src, active }) {
  const player = useRef(null);
  let status = useRef('');

  const handlePlay = () => status.current = 'playing';
  const handleStop = () => status.current = 'stopped';

  useEffect(() => {
    const currentPlayer = player.current;

    currentPlayer.addEventListener('play', handlePlay);
    currentPlayer.addEventListener('ended', () => handleStop);

    return () => {
      currentPlayer.removeEventListener('play', handlePlay);
      currentPlayer.removeEventListener('ended', handleStop);
    }
  },[])

  useEffect(() => {
    if (active) {
      player.current.src = src;
      player.current.load();
    }
  }, [src, active])

  const playSound = () => {
    if (active) {
      if (status.current === 'playing') {
        player.current.pause();
        player.current.currentTime = 0;
     }
      player.current.play();
    }
  }

  return (
    <Fragment>
      <audio ref={player}></audio>
      {React.Children.map(children, (element, index) =>
        cloneElement(element, { playSound }))}
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    active: state.ui.sfxPlayer.active
  }
}

export default connect(mapStateToProps)(SfxPlayer);