import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import api from '../../../api';
import VideoCreateForm from '../../components/VideoCreateForm';
import VideoUrlParser from '../../../utility/urlparser';

function VideoFormContainer() {
  const [video, setVideo] = useState(null);
  const { id } = useParams();
  const history = useHistory();
  const parser = new VideoUrlParser();

  const handleSubmit = data => {
    if (id) {
      api.patch(`/movies/${id}`, data)
        .then(() => history.push('/'))
        .catch(err => console.log(err));
    } else {
      api.post('/movies', data)
        .then(() => history.push('/'))
        .catch(err => console.log(err));
    }
  }

  const handleReset = event => {
    history.goBack();
  }

  useEffect(() => {
    if (id) {
      api.get(`/movies/${id}`)
        .then(data => {
          setVideo({
            ...data,
            thumbnail: parser.parseThumb(data.video_url)
          });
        })
        .catch(err => {
          console.log(err)
          setVideo({ noVideo: true })
        });
    }
  }, [id]);

  return (
    <VideoCreateForm data={video} onSubmit={handleSubmit} onReset={handleReset}/>
  );
}

export default VideoFormContainer;