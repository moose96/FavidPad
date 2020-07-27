import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../forms/Button';
import VideoUrlParser from '../../../utility/urlparser/';
import '../../../styles/iconmoon/style.scss';
import './Video.scss';

function Video({ title, description, video_url, id, onClick, onDelete }) {
  const parser = new VideoUrlParser();

  return (
    <div className="video" >
      <div className="video__header">
        <h2>{title}</h2>
        <div className="video__toolbar">
          <Button key={`button-${id}-1`} as="link" type="flat" linkTo={`/video/${id}/update`}>
            <span className="icon icon-pencil"></span>
          </Button>
          <Button key={`button-${id}-2`} as="link" type="flat" onClick={onDelete}>
            <span className="icon icon-cross"></span>
          </Button>
        </div>
      </div>
      <div className="video__content" onClick={onClick}>
        <img src={parser.parseThumb(video_url)} alt="thumb"/>
        <p>{description}</p>
      </div>
    </div>
  );
}

Video.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  video_url: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Video;