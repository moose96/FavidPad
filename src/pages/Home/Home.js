import React, { Fragment } from 'react';

import useOrientation from '../../hooks/useOrientation';
import VideosContainer from '../../video/containers/VideosContainer';
import '../../styles/iconmoon/style.scss';
import '../styles.scss';

function Home() {
  const orientation = useOrientation();

  let listViewType = '';
  if (orientation === 'landscape') {
    listViewType = 'carousel';
  } else if (orientation === 'portrait') {
    listViewType = 'listView';
  }

  return(
    <Fragment>
      {/* <div className="home__toolbar">
      </div> */}
      <VideosContainer viewType={listViewType} />
    </Fragment>
  );
}

export default Home;