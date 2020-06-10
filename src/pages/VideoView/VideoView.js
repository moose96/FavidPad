import React,{ Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { API_URL } from '../../global';
import Player from '../../components/Player';
import VideoUrlParser from '../../utility/urlparser/';
import './VideoView.scss';
import VideoList from '../../components/VideoList';

const IsVideo = ({ video }) => (
    <Fragment>
        <div className="video-view__player">
            <Player source={video.video_url} />
        </div>
        <div className="video-view__content">
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <h3>Kolejne filmy: </h3>
            <VideoList viewType="listView" />
        </div>
    </Fragment>
)

const NoVideo = ({ text }) => <h2>{text}</h2>;

function VideoView(props) {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const parser = new VideoUrlParser();
  let _component = null;
  const { id } = useParams();

  useEffect(() => { // potwór :(
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
      console.log(err);
      setLoading(false);
    });
  },[id]);

  useEffect(() => {
    setLoading(false);
  },[video]);

  if (!loading) {
    if (video) {
      _component = <IsVideo video={video} />
    } else {
      _component = <NoVideo text="Nie znaleziono filmu." />
    }
  } else {
    _component = <NoVideo text="Loading..." />
  }

  return (
    <div className="video-view">
      {_component}
    </div>
  );

}

export default VideoView;