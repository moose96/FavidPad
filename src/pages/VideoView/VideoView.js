import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import { API_URL } from '../../global';
import api from '../../api';
import VideoUrlParser from '../../utility/urlparser/';
import './VideoView.scss';
import Loading from '../../ui/components/view/Loading';
import Standard from './Standard'
import VideoNotFound from './VideoNotFound'

function VideoView() {
  const [video, setVideo] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const parser = new VideoUrlParser();
  const { id } = useParams();

  useEffect(() => {
    api.get(`/movies/${id}`)
    .then(data => {
      let _video = {...data};
      _video.video_url = parser.parse(data.video_url);

      setVideo(_video);
       document.title = `${_video.title} - FavidPad`;
      console.log(document);
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