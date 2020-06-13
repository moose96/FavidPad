import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

import './Content.scss';

function Content ({ children, onCustomHeight }) {
  const videoCreate = useRouteMatch('/video/create');
  const videoView = useRouteMatch('/video/:id');

  let hAuto = false
  if (!videoCreate && videoView && videoView.isExact) {
    hAuto = true;
    onCustomHeight(true);
  } else {
    onCustomHeight(false);
  }

  return (
    <content className={`${hAuto && 'h-auto'}`}>
      <Switch>
        {children}
      </Switch>
    </content>
  );
}

Content.defaultProps = {
  onCustomHeight: () => {}
}

export default Content;