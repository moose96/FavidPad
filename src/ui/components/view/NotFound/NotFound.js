import React from 'react';

import '../../../../styles/iconmoon/style.scss';
import './NotFound.scss';

function NotFound({ message }) {
  return (
    <div className="not-found">
      <div className="not-found__icon">
        <span className="icon icon-sad"></span>
      </div>
      <h4>{message}</h4>
    </div>
  );
}

export default NotFound;