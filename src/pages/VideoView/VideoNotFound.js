import React, { Fragment } from 'react';

import NotFound from '../../ui/components/view/NotFound';
import VideosContainer from '../../video/containers/VideosContainer';
import VideoViewTemplate from '../templates/VideoView/VideoViewTemplate';

function VideoNotFound() {
  return (
    <VideoViewTemplate
      player={<NotFound message="Nie znaleziono filmu" />}
      content={
        <Fragment>
          <h3>Inne filmy: </h3>
          <VideosContainer viewType="listView" />
        </Fragment>
      } />
  );
}

export default VideoNotFound;