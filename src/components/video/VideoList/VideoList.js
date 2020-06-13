import React,{ useState, useEffect, Fragment } from 'react';

import VideoContainer from '../VideoContainer';
import { API_URL } from '../../../global';
import './VideoList.scss';
import CarouselView from '../../views/CarouselView';
import ListView from '../../views/ListView';
import Button from '../../forms/Button';

function VideoList({ viewType, limit, onClick }) {
  const [videos, setVideos] = useState([{ video_url: ''}]);

  useEffect(() => {
    fetch(`${API_URL}/movies`)
    .then(response => response.json())
    .then(data => setVideos(data));
  },[]);

  let view;
  let videosToMap = videos;

  if (limit) {
    videosToMap = videos.slice(0, limit);
  }

  const children = videosToMap.map((element) =>
    <VideoContainer key={element.id} video={element} />
  );

  if (viewType === 'carousel') {
    view = (
      <Fragment>
        <CarouselView>
          {children}
        </CarouselView>
      </Fragment>
    );
  } else if(viewType === 'listView') {
    view = (
      <ListView>
        {children}
      </ListView>
    );
  }

  return (
    <div className="video-list">
      {view}
      <div className="video-list__toolbar">
        <Button as="link" type="flat-contrast" linkTo="/video/create">
          <span className="icon icon-plus"></span> Dodaj
        </Button>
        </div>
    </div>
  );
}

VideoList.defaultProps = {
  viewType: 'carousel'
}

export default VideoList;