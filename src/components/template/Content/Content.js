import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { setCustomHeight } from './redux';
import './Content.scss';

function Content ({ children, customHeight, onCustomHeight }) {
  const videoCreate = useRouteMatch('/video/create');
  const videoView = useRouteMatch('/video/:id');

  if (!videoCreate && videoView && videoView.isExact) {
    onCustomHeight(true);
  } else {
    onCustomHeight(false);
  }

  let hAuto = false;
  if (customHeight) {
    hAuto = true;
  }

  return (
    <content className={`${hAuto && 'h-auto'}`}>
      <Switch>
        {children}
      </Switch>
    </content>
  );
}

Content.propTypes = {
  children: PropTypes.node,
  onCustomHeight: PropTypes.func.isRequired
}

Content.defaultProps = {
  onCustomHeight: () => {}
}

const mapStateToProps = state => ({
  customHeight: state.content.customHeight
})

const mapDispatchToProps = dispatch => ({
  onCustomHeight: data => dispatch(setCustomHeight(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Content);