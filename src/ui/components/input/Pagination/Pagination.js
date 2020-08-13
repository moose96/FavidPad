import React from 'react';

import Button from '../button/Button';
import PaginationElement from './PaginationElement';
import './Pagination.scss';

function Pagination({ className, pages, current, onPageChange }) {
  const handleElementClick = id => {
    onPageChange(id);
  }

  let elements = [];
  for (let i = 0; i < pages; i++) {
    elements.push(<PaginationElement key={`pagination-${i}`} id={i} active={current === i} onClick={handleElementClick}/>);
  }

  const handleButtonClick = event => {
    const delta = event.target.name === 'prev' ? -1 : 1;
    let newPage = 0;

    if (current + delta < 0) {
      newPage = pages - 1;
    } else {
      newPage = (current + delta) % pages;
    }

    onPageChange(newPage);
  }

  return (
    <div className={`pagination ${className}`}>
      <Button as="button" name="prev" type="flat" className="pagination__nav-button" onClick={handleButtonClick}>&lt;</Button>
      <div className="pagination__content">
        {elements}
      </div>
      <Button as="button" name="next" type="flat" className="pagination__nav-button" onClick={handleButtonClick}>&gt;</Button>
    </div>
  );
}

export default Pagination;