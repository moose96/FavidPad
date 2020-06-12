import React, { Fragment } from 'react';

import NotFound from '../../../components/views/NotFound';
import VideoList from '../../../components/video/VideoList';

function NotFoundTemplate() {
  return (
    <Fragment>
      <div className="video-view__player">
        <NotFound message="Nie znaleziono filmu" />
      </div>
      <div className="video-view__content">
        <h3>Inne filmy: </h3>
        <VideoList viewType="listView" />
      </div>
    </Fragment>
  );
}

export default NotFoundTemplate;