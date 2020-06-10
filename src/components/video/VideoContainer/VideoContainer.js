import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';

import { API_URL } from '../../../global';
import Video from '../Video/Video';
import './VideoContainer.scss';
import DeleteVideoForm from '../../forms/DeleteVideoForm';

const Loading = () => <div className="loading">Loading...</div>;

function VideoContainer({ active, style, video, onClick }) {
  const [frame, setFrame] = useState(0);
  let history = useHistory();

  useEffect(() => {
    if (video.id) {
      setFrame(1);
    } else {
      setFrame(0);
    }
  },[video]);

  const handleClick = () => {
    if (active) {
      history.push(`/video/${video.id}`);
    } else {
      onClick(video.id);
    }
  }

  const handleDeleteVideo = (event) => {
    event.preventDefault();

    fetch(`${API_URL}/movies/${video.id}`,{
      method: 'DELETE'
    })
      .then(response => {
        if (response.status === 200) {
          history.push('/');
          console.log('OK');
        } else {
          throw Error(`response error: ${response.status}`)
        }
      })
      .catch(err => console.log(err));
  }

  const handleDeleteVideoClick = () => {
    setFrame(2);
    onClick(video.id);
  }

  const classes = classnames({
    'video-container': true,
    active
  });

  const children = [
    <Loading />,
    <Video {...video} active={active} onClick={handleClick} onDelete={handleDeleteVideoClick} />,
    <DeleteVideoForm onReject={() => setFrame(1)} onSubmit={handleDeleteVideo} />
  ];

  return (
    <div className={classes} style={style}>
      {children[frame]}
    </div>
  );
}

VideoContainer.defaultProps = {
  video: []
}

export default VideoContainer;