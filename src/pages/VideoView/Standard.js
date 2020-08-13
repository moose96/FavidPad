import React, { Fragment } from 'react';

import Player from '../../video/components/Player';
// import VideoList from '../../../components/video/VideoList';
import VideosContainer from '../../video/containers/VideosContainer';
import VideoViewTemplate from '../templates/VideoView/VideoViewTemplate';

function Standard({ video }) {
  return (
    <VideoViewTemplate
      player={<Player source={video.video_url} />}
      content={
        <Fragment>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <h3>Kolejne filmy: </h3>
          <VideosContainer viewType="listView" />
        </Fragment>
      } />
  );
}

export default Standard;