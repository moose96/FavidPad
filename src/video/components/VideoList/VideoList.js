import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import VideoContainer from '../VideoContainer';
import './VideoList.scss';
import CarouselView from '../../../ui/containers/view/CarouselView';
import ListView from '../../../ui/components/view/ListView';
import ToggleButton from '../../../ui/components/input/button/ToggleButton';
import SfxButton from '../../../ui/components/input/button/SfxButton';
import ding from '../../../assets/sfx/ding.ogg';
import Pagination from '../../../ui/components/input/Pagination';
import Number from '../../../ui/components/input/Number';

import { toggleSfxPlayer } from '../../../ui/containers/multimedia/SfxPlayer/actions';
import { setCurrentPage, setMaxPages, setPageSize } from './actions';

function VideoList({ viewType, data, pagination, setPagination, sfxPlayer, toggleSfxPlayer }) {
  useEffect(() => {
    if (data) {
      setPagination(setMaxPages(pagination.elementsPerPage && Math.ceil(data.length / pagination.elementsPerPage)));
    }
  }, [pagination.elementsPerPage, data]);

  const handlePageChange = page => setPagination(setCurrentPage(page));
  const handlePagesizeChange = value => setPagination(setPageSize(value));

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
      <div className="video-list__header-toolbar">
        <ToggleButton type="flat" value={sfxPlayer} onToggle={toggleSfxPlayer}>
          <ToggleButton.State type="on"><span className="icon icon-volume_up"></span></ToggleButton.State>
          <ToggleButton.State type="off"><span className="icon icon-volume_off"></span></ToggleButton.State>
        </ToggleButton>
      </div>
      {view}
      <div className="video-list__toolbar">
        <div className="video-list__pagination">
          {pagination.maxPages > 1 && (
            <Pagination className="video-list__pagination__element--center"
              pages={pagination.maxPages} current={pagination.currentPage} onPageChange={handlePageChange} /> )}
          <Number className="video-list__pagination__element--right"
            value={pagination.elementsPerPage} onChange={handlePagesizeChange} />
        </div>
        <SfxButton as="link" type="flat-contrast" linkTo="/video/create" onHoverSfx={ding}>
          <span className="icon icon-plus"></span> Dodaj
        </SfxButton>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    sfxPlayer: state.uiSettings.sfxPlayer.active,
    pagination: {
      ...state.ui.pagination,
      ...state.uiSettings.pagination
    }
  }
}

const mapDispatchToProps = dispatch => ({
  toggleSfxPlayer: value => dispatch(toggleSfxPlayer(value)),
  setPagination: callback => dispatch(callback)
})

VideoList.propTypes = {
  viewType: PropTypes.string
}

VideoList.defaultProps = {
  viewType: 'carousel'
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);