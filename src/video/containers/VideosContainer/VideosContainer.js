import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import api from '../../../api';
import VideoList from '../../components/VideoList';

// import { toggleSfxPlayer } from '../../../ui/containers/multimedia/SfxPlayer/actions';
import { setCurrentPage, setMaxPages, setPageSize } from '../../components/VideoList/actions';

function VideosContainer({ viewType, pagination, setPagination/*, sfxPlayer, toggleSfxPlayer*/ }) {
  const [videos, setVideos] = useState([{ video_url: '' }]);

  useEffect(() => {
    api.get('/movies')
      .then(data => setVideos(data));
  },[]);

  useEffect(() => {
    if (videos) {
      setPagination(setMaxPages(pagination.elementsPerPage && Math.ceil(videos.length / pagination.elementsPerPage)));
    }
  }, [pagination.elementsPerPage, videos]);

  const handlePageChange = page => setPagination(setCurrentPage(page));
  const handlePagesizeChange = value => setPagination(setPageSize(value));

  return (
    <VideoList
      viewType={viewType}
      data={videos}
      pagination={pagination}
      //sfxPlayer={sfxPlayer}
      onPageChange={handlePageChange}
      onPageSizeChange={handlePagesizeChange} />
      //onSfxPlayerToggle={() => toggleSfxPlayer()} />
  )
}

VideosContainer.propTypes = {
  viewType: PropTypes.string
}

VideosContainer.defaultProps = {
  viewType: 'carousel'
}

const mapStateToProps = state => {
  return {
    // sfxPlayer: state.uiSettings.sfxPlayer.active,
    pagination: {
      ...state.ui.pagination,
      ...state.uiSettings.pagination
    }
  }
}

const mapDispatchToProps = dispatch => ({
  // toggleSfxPlayer: value => dispatch(toggleSfxPlayer(value)),
  setPagination: callback => dispatch(callback)
})



export default connect(mapStateToProps, mapDispatchToProps)(VideosContainer);