import React from 'react';
import { Link } from 'react-router-dom';

import VideoUrlParser from '../../utility/urlparser/';
import '../../styles/iconmoon/style.scss';
import './Video.scss';

function Video({ title, description, video_url, id, onClick, onDelete }) {
  const parser = new VideoUrlParser();

  return (
    <div className="video" >
      <div className="video__header">
        <h2>{title}</h2>
        <div className="video__toolbar">
          <Link to={`/video/${id}/update`}><span className="icon icon-pencil"></span></Link>
          <Link onClick={onDelete}><span className="icon icon-cross"></span></Link>
        </div>
      </div>
      <div className="video__content" onClick={onClick}>
        <img src={parser.parseThumb(video_url)} alt="thumb"/>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Video;