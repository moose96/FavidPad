import React,{ useState, useEffect, Fragment } from 'react';

// import VideoContainer from '../VideoContainer';
import { API_URL } from '../../../global';
import './VideoList.scss';
import CarouselView from '../../views/CarouselView';
import ListView from '../../views/ListView';

function VideoList({ viewType }) {
  const [videos, setVideos] = useState([{ video_url: ''}]);

  useEffect(() => {
    fetch(`${API_URL}/movies`)
    .then(response => response.json())
    .then(data => setVideos(data));
  },[]);

  let view;

  if (viewType === 'carousel') {
    view = <CarouselView videos={videos} />
  } else if(viewType === 'listView') {
    view = <ListView videos={videos} />
  }

  return (
    <Fragment>
      {view}
    </Fragment>
  );
}

VideoList.defaultProps = {
  viewType: 'carousel'
}

export default VideoList;