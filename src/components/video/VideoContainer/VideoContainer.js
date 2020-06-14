import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';

import { API_URL } from '../../../global';
import Video from '../Video/Video';
import './VideoContainer.scss';
import MessageBox from '../../forms/MessageBox';
import Loading from '../../views/Loading';

function VideoContainer({ className, active, allowClick, style, video, onClick }) {
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
    if (allowClick) {
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
        } else {
          throw Error(`response error: ${response.status}`)
        }
      })
      .catch(err => console.log(err));
  }

  const handleDeleteVideoClick = () => {
    setFrame(2);
    if (onClick) {
      onClick(video.id);
    }
  }

  const classes = classnames(className,{
    'video-container': true,
    active
  });

  const children = [
    <Loading />,
    <Video {...video} active={active} onClick={handleClick} onDelete={handleDeleteVideoClick} />,
    <MessageBox className="delete-video-message-box"
      type="yes-no"
      defaultButton="reset"
      onReject={() => setFrame(1)}
      onSubmit={handleDeleteVideo} >
      Czy na pewno chcesz usunąć to video?
    </MessageBox>
  ];

  return (
    <div className={classes} style={style}>
      {children[frame]}
    </div>
  );
}

VideoContainer.defaultProps = {
  video: [],
  active: false,
  allowClick: true
}

export default VideoContainer;