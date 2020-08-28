import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import VideoContainer from '../VideoContainer';
import './VideoList.scss';
import CarouselView from '../../../ui/components/view/CarouselView';
import ListView from '../../../ui/components/view/ListView';
import VideoListToolbar from './VideoListToolbar';

function VideoList({ viewType, data, pagination, onPageChange, onPageSizeChange }) {
  let view;
  let videosToMap = data.slice(pagination.elementsPerPage * pagination.currentPage,
    pagination.elementsPerPage * pagination.currentPage + pagination.elementsPerPage);

  const children = videosToMap.map((element) =>
    <VideoContainer key={element.id} video={element} />
  );

  if (viewType === 'carousel') {
    view = (
      <CarouselView>
        {children}
      </CarouselView>
    );
  } else if(viewType === 'listView') {
    view = (
      <ListView>
        {children}
      </ListView>
    );
  }

  return (
    <div className="video-list">
      {view}
      <VideoListToolbar pagination={pagination} onPageChange={onPageChange} onPageSizeChange={onPageSizeChange} />
    </div>
  );
}

VideoList.propTypes = {
  viewType: PropTypes.string
}

VideoList.defaultProps = {
  viewType: 'carousel'
}

export default VideoList;