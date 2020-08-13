import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import VideoContainer from '../VideoContainer';
import './VideoList.scss';
import CarouselView from '../../views/CarouselView';
import ListView from '../../views/ListView';
import Button from '../../forms/Button';
import ToggleButton from '../../forms/ToggleButton';
import SfxButton from '../../forms/SfxButton';
import { toggleSfxPlayer } from '../../multimedia/SfxPlayer/redux';
import ding from '../../../sfx/ding.ogg';
import Pagination from '../../views/Pagination/Pagination';
import PageSize from '../../views/PageSize';

function VideoList({ viewType, data, pagesize, onClick, sfxPlayer, toggleSfxPlayer }) {
  const [pagination, setPagination] = useState({ current: 0, max: 0 });

  useEffect(() => {
    if (data) {
      setPagination({
        ...pagination,
        max: pagesize && Math.ceil(data.length / pagesize)
      });
    }
  }, [pagesize, data]);

  const handlePageChange = page => {
    setPagination({
      ...pagination,
      current: page
    });
  }

  let view;
  let videosToMap = data.slice(pagesize * pagination.current, pagesize * pagination.current + pagesize);

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
          <Pagination className="video-list__pagination__element--center"
            pages={pagination.max} current={pagination.current} onPageChange={handlePageChange} />
          <PageSize className="video-list__pagination__element--right"/>
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
    sfxPlayer: state.sfx.active,
    pagesize: state.pagesize.pagesize
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSfxPlayer: value => dispatch(toggleSfxPlayer(value))
  }
}

VideoList.propTypes = {
  viewType: PropTypes.string
}

VideoList.defaultProps = {
  viewType: 'carousel'
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);