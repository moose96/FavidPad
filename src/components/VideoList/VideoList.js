import React,{ useState, useEffect} from 'react';

import Video from '../Video';
import './VideoList.scss';

function VideoList(/*{ videos, currentVideo }*/) {
  const [videos, setVideos] = useState([{ video_url: ''}]);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [lastTouchXValue, setLastTouchXValue] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/v1/movies')
    .then(response => response.json())
    .then(data => setVideos(data));
  },[]);

  const handleVideoClick = (id) => {
    let index = videos.findIndex((element) => element.id === id);
    setCurrentVideo(index);
  }

  const calculateNewVideoIndex = (delta) => {
    const newIndex = delta > 0 ? currentVideo + 1 : currentVideo - 1;

    if (newIndex >= 0 && newIndex < videos.length) {
      setCurrentVideo(newIndex);
    } else if (newIndex > 0) {
      setCurrentVideo(videos.length - 1);
    } else if (newIndex < 0) {
      setCurrentVideo(0);
    }
  }

  const handleMouseWheel = (event) => {
    calculateNewVideoIndex(Math.floor(event.deltaY) / 2);
  }

  const handleTouchEvent = (event) => {
    calculateNewVideoIndex(lastTouchXValue - event.changedTouches[0].clientX);
    setLastTouchXValue(event.changedTouches[0].clientX);
  }

  return (
    <div className="video-list" onWheel={handleMouseWheel} onTouchMove={handleTouchEvent}>
      {videos.map((element, index, table) => {
        let translateX, scale, style;

        if (index !== currentVideo) {
          translateX = (index - currentVideo) * 75;
          scale = 0.9 ** Math.abs(index - currentVideo);

          style = {
            transform: `translateX(${translateX}%) scale(${scale})`,
          }
        }

        style = {
          ...style,
          zIndex: table.length - Math.abs(index - currentVideo)
        }

        return (
          <Video key={`video-${element.id}`} active={index === currentVideo}
          style={style} onClick={handleVideoClick} {...element} />
        )
      })}
    </div>
  );
}

export default VideoList;