import React from 'react';
import { useHistory } from 'react-router-dom';

import VideoContainer from '../../video/VideoContainer';

function ListView({ videos }) {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/video/${id}`);
  }

  return (
    <div className="video-list--list">
      {videos.map((element) =>
        <VideoContainer key={element.id} video={element} onClick={handleClick} />
      )}
    </div>
  );
}

export default ListView;