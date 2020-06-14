import React, { Fragment, useState, useEffect } from 'react';

import VideoList from '../../components/video/VideoList';
import '../../styles/iconmoon/style.scss';
import '../styles.scss';

function Home() {
  const [listViewType, setListViewType] = useState('carousel');

  const handleOrientationChange = () => {
    if (window.screen.orientation) {
      if (window.screen.orientation.type.match(/landscape/i)) {
        setListViewType('carousel');
      } else if (window.screen.orientation.type.match(/portrait/i)) {
        setListViewType('listView');
      }
    }
  }

  useEffect(() => {
    window.addEventListener('orientationchange', handleOrientationChange);
    handleOrientationChange();

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return(
    <Fragment>
      {/* <div className="home__toolbar">
      </div> */}
      <VideoList viewType={listViewType} />
    </Fragment>
  );
}

export default Home;