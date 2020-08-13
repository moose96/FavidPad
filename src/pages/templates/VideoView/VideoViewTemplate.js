import React, { Fragment } from 'react';

function VideoViewTemplate({ player, content }) {
  return (
    <Fragment>
      <div className="video-view__player">
        {player}
      </div>
      <div className="video-view__content">
        {content}
      </div>
    </Fragment>
  );
}

export default VideoViewTemplate;