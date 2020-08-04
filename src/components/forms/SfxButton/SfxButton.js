import React from 'react';

import SfxPlayer from '../../multimedia/SfxPlayer';
import Button from '../Button';

function Inner({ playSound, onHover, onClick ,...props }) {
  const handleHover = () => {
    playSound();

    if (onHover) {
      onHover();
    }
  }

  return <Button onHover={handleHover} onClick={onClick} {...props} />
}

function Wrapper({ playSound, onHoverSfx, onClick, ...props}) {
  const handleClick = () => {
    playSound();

    if (onClick) {
      onClick();
    }
  }

  return (
    <SfxPlayer src={onHoverSfx}>
      <Inner onClick={handleClick} {...props} />
    </SfxPlayer>
  );
}

function SfxButton({ onClickSfx, onHoverSfx, ...props}) {
  return (
    <SfxPlayer src={onClickSfx}>
      <Wrapper onHoverSfx={onHoverSfx} {...props} />
    </SfxPlayer>
  );
}

export default SfxButton;