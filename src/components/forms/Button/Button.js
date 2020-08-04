import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Button.scss';

function Button ({ as, className, children, type, Default, linkTo, onClick, onHover }) {
  const classes = classnames(className, {
    'button': true,
    'button--flat': type === 'flat',
    'button--flat-contrast': type === 'flat-contrast',
    'default': Default
  });

  const a = <a className = {classes} href={linkTo} onClick={onClick} onMouseEnter={onHover}>{children}</a>;
  const link = <Link className = {classes} to={linkTo} onClick={onClick} onMouseEnter={onHover}>{children}</Link>
  const button = <button className = {classes} onClick={onClick} onMouseEnter={onHover}>{children}</button>
  const submit = <input className = {classes} type="submit" value={children} onMouseEnter={onHover}/>
  const reset = <input className = {classes} type="reset" value={children} onMouseEnter={onHover} />

  if (as === 'a') {
    return a;
  } else if (as === 'link') {
    return link;
  } else if (as === 'button') {
    return button;
  } else if (as === 'submit') {
    return submit;
  } else if (as === 'reset') {
    return reset;
  }
}

Button.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  Default: PropTypes.bool,
  linkTo: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  as: 'button',
  type: 'button',
  linkTo: '#',
  children: 'Button'
}

export default Button;