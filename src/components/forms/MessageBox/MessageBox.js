import React from 'react';

import Button from '../Button';
import './MessageBox.scss';

function MessageBox({ className, children, type, onReject, onSubmit, defaultButton }) {
  const buttonTypes = ['submit', 'reset'];
  const buttonLayoutTypes = {
    'ok': ['OK'],
    'ok-cancel': ['OK', 'Anuluj'],
    'yes-no': ['Tak', 'Nie']
  };

  return (
    <form className={`message-box ${className}`} onReset={onReject} onSubmit={onSubmit}>
      <div className="message-box__message">
        <p>{children}</p>
      </div>
      <div className="message-box__buttons">
        {buttonLayoutTypes[type].map((element, index) => (
          <Button type="flat-contrast"
            Default={buttonTypes[index] === defaultButton}
            key={`message-box-button-${index}`}
            as={buttonTypes[index]} >
            {element}</Button>
        ))}
      </div>
    </form>
  );
}

export default MessageBox;