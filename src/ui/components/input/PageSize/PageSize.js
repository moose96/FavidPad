import React from 'react';
import { connect } from 'react-redux';

import Number from '../Number';
import { setPagesize } from './actions';

function PageSize({ className, size, setSize }) {
  const handleChange = value => {
    setSize(value);
  }

  return <Number className={className} value={size} onChange={handleChange} />
}

const mapStateToProps = state => ({
  size: state.pagesize.pagesize
});

const mapDispatchToProps = dispatch => ({
  setSize: size => dispatch(setPagesize(size))
})

export default connect(mapStateToProps, mapDispatchToProps)(PageSize);