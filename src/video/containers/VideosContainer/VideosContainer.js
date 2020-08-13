import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../../api';
import VideoList from '../../components/VideoList';

function VideosContainer({ viewType }) {
  const [videos, setVideos] = useState([{ video_url: '' }]);

  useEffect(() => {
    api.get('/movies')
      .then(data => setVideos(data));
  },[]);

  return (
    <VideoList viewType={viewType} data={videos} />
  )
}

VideosContainer.propTypes = {
  viewType: PropTypes.string
}

VideosContainer.defaultProps = {
  viewType: 'carousel'
}


export default VideosContainer;