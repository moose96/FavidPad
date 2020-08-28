import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import api from '../../../api';
import Video from '../Video/';
import './VideoContainer.scss';
import MessageBox from '../../../form/components/MessageBox';
import Loading from '../../../ui/components/view/Loading';

function VideoContainer({ className, active, allowClick, style, video, onClick, playSound }) {
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

    api.delete(`/movies/${video.id}`)
      .then(() => history.push('/'))
      .catch(err => console.log(err));
  }

  const handleDeleteVideoClick = () => {
    setFrame(2);
    if (onClick) {
      onClick(video.id);
    }
  }

  const handleMouseEnter = () => {
    if (playSound) {
      playSound();
    }
  }

  const classes = classnames(className,{
    'video-container': true,
    active
  });

  const children = [
    <Loading key={`loading-${video.id}`}/>,
    <Video key={`video=${video.id}`} {...video} active={active} onClick={handleClick} onDelete={handleDeleteVideoClick} />,
    <MessageBox.YesNo key={`delete-message-box-${video.id}`}
      className="delete-video-message-box"
      defaultButton="reset"
      onReject={() => setFrame(1)}
      onSubmit={handleDeleteVideo} >
      Czy na pewno chcesz usunąć to video?
    </MessageBox.YesNo>
  ];

  return (
    <div className={classes} style={style} onMouseEnter={handleMouseEnter}>
      {children[frame]}
    </div>
  );
}

VideoContainer.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  allowClick: PropTypes.bool,
  style: PropTypes.object,
  video: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    video_url: PropTypes.string
  }),
  onClick: PropTypes.func.isRequired
}

VideoContainer.defaultProps = {
  video: [],
  active: false,
  allowClick: true
}

export default VideoContainer;