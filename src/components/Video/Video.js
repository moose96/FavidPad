import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import classnames from 'classnames';

import VideoUrlParser from '../../utility/urlparser/';
import '../../styles/iconmoon/style.scss';
import './Video.scss';

function Video({ title, description, video_url, id, active, style, onClick }) {
  const parser = new VideoUrlParser();
  let history = useHistory();

  const handleClick = () => {
    if (active) {
      history.push(`/video/${id}`);
    } else {
      onClick(id);
    }
  }

  const classes = classnames({
    video: true,
    active
  });

  return (
    <div className={classes} style={style}>
      <div className="video__header">
        <h2>{title}</h2>
        <div className="video__toolbar">
          <Link to={`/video/${id}/update`}><span className="icon icon-pencil"></span></Link>
          <Link><span className="icon icon-cross"></span></Link>
        </div>
      </div>
      <div className="video__content" onClick={handleClick}>
        <img src={parser.parseThumb(video_url)} alt="thumb"/>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Video;