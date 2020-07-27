import React, { Fragment } from 'react';

import NotFound from '../../components/views/NotFound';
// import VideoList from '../../../components/video/VideoList';
import VideosContainer from '../../components/video/VideosContainer';
import VideoViewTemplate from '../../templates/VideoView/VideoViewTemplate';

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