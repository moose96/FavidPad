import React from 'react';

import Button from '../Button';
import State from './State';

function ToggleButton({ className, children, type, value, onToggle}) {
  const littleMap = ['off', 'on'];

  const handleClick = event => {
    event.preventDefault();
    onToggle(!value)
  }

  let face;

  if (React.Children.count() === 1) {
    face = children;
  } else {
    React.Children.forEach(children, child => {
      if (child.type.name === 'State' &&
        child.props.type === littleMap[value ? 1 : 0]) {
          face = child;
      }
    })
  }

  return (
    <Button as="button" className={className} type={type} onClick={handleClick}>
      {face}
    </Button>
  )
}

ToggleButton.State = State;

export default ToggleButton