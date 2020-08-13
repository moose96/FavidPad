import React, { Fragment } from 'react';

function State({ type, children }) {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

// State.name = 'State';

export default State;