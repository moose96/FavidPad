import React from 'react';

import '../../../../styles/iconmoon/style.scss';
import './Loading.scss';

function Loading() {
  return (
    <div className="loading">
      <div className="loading__spinner">
        <span className="icon icon-spinner10"></span>
      </div>
      <p>Ładowanie...</p>
    </div>
  );
}

export default Loading;