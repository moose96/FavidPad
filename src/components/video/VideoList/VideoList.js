import React,{ useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import VideoContainer from '../VideoContainer';
import { API_URL } from '../../../global';
import './VideoList.scss';
import CarouselView from '../../views/CarouselView';
import ListView from '../../views/ListView';

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
        <div className="video-list__toolbar">
          <Link className="button--flat" to="/video/create">
            <span className="icon icon-plus"></span> Dodaj
          </Link>
        </div>
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
    </div>
  );
}

VideoList.defaultProps = {
  viewType: 'carousel'
}

export default VideoList;