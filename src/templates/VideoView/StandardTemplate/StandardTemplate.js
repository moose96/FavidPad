import React, { Fragment } from 'react';

import Player from '../../../components/video/Player';
import VideoList from '../../../components/video/VideoList';

function StandardTemplate({ video }) {
  return (
    <Fragment>
      <div className="video-view__player">
        <Player source={video.video_url} />
      </div>
      <div className="video-view__content">
        <h2>{video.title}</h2>
        <p>{video.description}</p>
        <h3>Kolejne filmy: </h3>
        <VideoList viewType="listView" />
      </div>
    </Fragment>
  );
}

export default StandardTemplate;