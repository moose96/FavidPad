import React from 'react';
import PropTypes from 'prop-types';

import './MessageBox.scss';

function MessageBoxTemplate({ className, onReject, onSubmit, children, message }) {
  return (
    <form className={`message-box ${className}`} onReset={onReject} onSubmit={onSubmit}>
      <div className="message-box__message">
        <p>{message}</p>
      </div>
      <div className="message-box__buttons">
        {children}
      </div>
    </form>
  );
}

MessageBoxTemplate.propTypes = {
  className: PropTypes.array,
  children: PropTypes.string.isRequired,
  onReject: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  message: PropTypes.string
};

export default MessageBoxTemplate;