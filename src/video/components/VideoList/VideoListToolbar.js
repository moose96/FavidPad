import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '../../../ui/components/input/Pagination';
import Number from '../../../ui/components/input/Number';

function VideoListToolbar({ pagination, onPageChange, onPageSizeChange }) {
  return (
    <div className="video-list__toolbar">
      <div className="video-list__pagination">
        {pagination.maxPages > 1 && (
          <Pagination className="video-list__pagination__element--center"
            pages={pagination.maxPages} current={pagination.currentPage} onPageChange={page => onPageChange(page)} /> )}
          <div className="video-list__pagination__element--right">
            {/* <p>Elementy na stronie: </p> */}
            <Number value={pagination.elementsPerPage} onChange={value => onPageSizeChange(value)} />
          </div>
      </div>
    </div>
  );
}

VideoListToolbar.propTypes = {
  pagination: PropTypes.shape({
      maxPages: PropTypes.number,
      currentPage: PropTypes.number,
      elementsPerPage: PropTypes.number
    }),
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired
}

export default VideoListToolbar;