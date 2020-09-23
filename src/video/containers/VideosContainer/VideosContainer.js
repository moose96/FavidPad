import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import api from '../../../api';
import VideoList from '../../components/VideoList';

import { setCurrentPage, setMaxPages, setPageSize } from '../../components/VideoList/actions';

function VideosContainer({ viewType, pagination, setPagination  }) {
  const [videos, setVideos] = useState([{ video_url: '' }]);

  const getMovies = () => {
    api.get('/movies')
      .then(data => setVideos(data));
  }

  useEffect(() => {
    getMovies();
  },[]);

  useEffect(() => {
    if (videos) {
      setPagination(setMaxPages(pagination.elementsPerPage && Math.ceil(videos.length / pagination.elementsPerPage)));
    }
  }, [pagination.elementsPerPage, videos]);

  const handlePageChange = page => setPagination(setCurrentPage(page));
  const handlePagesizeChange = value => setPagination(setPageSize(value));
  const handleVideoDelete = () => getMovies();

  return (
    <VideoList
      viewType={viewType}
      data={videos}
      pagination={pagination}
      onPageChange={handlePageChange}
      onPageSizeChange={handlePagesizeChange}
      onVideoDelete={handleVideoDelete} />
  )
}

VideosContainer.propTypes = {
  viewType: PropTypes.string
}

VideosContainer.defaultProps = {
  viewType: 'carousel'
}

const mapStateToProps = state => ({
  pagination: {
    ...state.ui.pagination,
    ...state.uiSettings.pagination
  }
})

const mapDispatchToProps = dispatch => ({
  setPagination: callback => dispatch(callback)
})



export default connect(mapStateToProps, mapDispatchToProps)(VideosContainer);