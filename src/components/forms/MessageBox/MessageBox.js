import React from 'react';

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
          <input className={buttonTypes[index] === defaultButton && 'default'}
            key={`message-box-button-${index}`}
            type={buttonTypes[index]}
            value={element} />
        ))}
      </div>
    </form>
  );
}

export default MessageBox;