import React from 'react';
import classnames from 'classnames';

function PaginationElement({ active, id, onClick }) {
  const classes = classnames({
    'pagination__element': true,
    'active': active
  });

  const handleClick = () => {
    onClick(id);
  }

  return (
    <div className={classes} onClick={handleClick}></div>
  );
}

export default PaginationElement;