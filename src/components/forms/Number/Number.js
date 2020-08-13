import React, { useState, useRef } from 'react';

import './Number.scss';
import Button from '../Button';

function Number({ className, onChange, value, ...props }) {
  const [showButtons, setShowButtons] = useState(false);

  const handleEnter = () => setShowButtons(true);
  const handleLeave = () => setShowButtons(false);

  const handleClick = event =>{
    if (event.target.name === 'up') {
      onChange(value + 1);
    } else if (event.target.name === 'down') {
      onChange(value - 1);
    }
  }

  const handleInputChange = event => {
    onChange(event.target.value);
  }

  return (
    <div className="number" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <input className={`number__input ${className}`} type="number" value={value} onChange={handleInputChange} {...props} />
      <div className="number__buttons">
        <Button name="up" onClick={handleClick}>+</Button>
        <Button name="down" onClick={handleClick}>-</Button>
      </div>
    </div>
  );
}

export default Number;