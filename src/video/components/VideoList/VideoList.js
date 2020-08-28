import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import VideoContainer from '../VideoContainer';
import './VideoList.scss';
import CarouselView from '../../../ui/components/view/CarouselView';
import ListView from '../../../ui/components/view/ListView';
// import ToggleButton from '../../../ui/components/input/button/ToggleButton';
// import SfxButton from '../../../ui/components/input/button/SfxButton';
// import ding from '../../../assets/sfx/ding.ogg';
// import Pagination from '../../../ui/components/input/Pagination';
// import Number from '../../../ui/components/input/Number';
import VideoListToolbar from './VideoListToolbar';

function VideoList({ viewType, data, pagination, sfxPlayer, onPageChange, onPageSizeChange,onSfxPlayerToggle }) {
  let view;
  let videosToMap = data.slice(pagination.elementsPerPage * pagination.currentPage,
    pagination.elementsPerPage * pagination.currentPage + pagination.elementsPerPage);

  const children = videosToMap.map((element) =>
    <VideoContainer key={element.id} video={element} />
  );

  if (viewType === 'carousel') {
    view = (
      <Fragment>
        <CarouselView>
          {children}
        </CarouselView>
      </Fragment>
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
      {/* <div className="video-list__header-toolbar">
        <ToggleButton type="flat" value={sfxPlayer} onToggle={() => onSfxPlayerToggle()}>
          <ToggleButton.State type="on"><span className="icon icon-volume_up"></span></ToggleButton.State>
          <ToggleButton.State type="off"><span className="icon icon-volume_off"></span></ToggleButton.State>
        </ToggleButton>
      </div> */}
      {view}
      <VideoListToolbar pagination={pagination} onPageChange={onPageChange} onPageSizeChange={onPageSizeChange} />
        {/* <SfxButton as="link" type="flat-contrast" linkTo="/video/create" onHoverSfx={ding}>
          <span className="icon icon-plus"></span> Dodaj
        </SfxButton>
      </div> */}
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