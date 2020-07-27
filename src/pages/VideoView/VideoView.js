import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { API_URL } from '../../global';
import VideoUrlParser from '../../utility/urlparser/';
import './VideoView.scss';
import Loading from '../../components/views/Loading';
import Standard from './Standard'
import VideoNotFound from './VideoNotFound'

function VideoView() {
  const [video, setVideo] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const parser = new VideoUrlParser();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/movies/${id}`)
    .then(response => {
      if(response.status === 200) {
          return response.json();
      } else {
          throw Error("not found");
      }
    })
    .then(data => {
      let _video = {...data};
      _video.video_url = parser.parse(data.video_url);

      setVideo(_video);
    })
    .catch(err => {
      setNotFound(true);
    });
  },[id]);

  let template

  if (!notFound) {
    if (video) {
      template = <Standard video={video} />;
    } else {
      template = (
        <div className="video-view__loading-placeholder">
          <Loading />
        </div>
      )
    }
  } else {
    template = <VideoNotFound />
  }

  return (
    <div className="video-view">
      {template}
    </div>
  );

}

export default VideoView;