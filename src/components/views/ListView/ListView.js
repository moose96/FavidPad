import React, { Fragment, cloneElement } from 'react';

import './ListView.scss';

function ListView({ children }) {
  return (
    <div className="list-view">
      {children.map((element) =>
        <Fragment>
          {cloneElement(element, {
            allowClick: true,
            className: 'list-view__element'
           })}
        </Fragment>
      )}
    </div>
  );
}

export default ListView;