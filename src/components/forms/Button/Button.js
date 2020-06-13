import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './Button.scss';

function Button ({ as, className, children, type, Default, linkTo, onClick }) {
  const classes = classnames(className, {
    'button': true,
    'button--flat': type === 'flat',
    'button--flat-contrast': type === 'flat-contrast',
    'default': Default
  });

  const a = <a className = {classes} href={linkTo} onClick={onClick}>{children}</a>;
  const link = <Link className = {classes} to={linkTo} onClick={onClick}>{children}</Link>
  const button = <button className = {classes} onClick={onClick}>{children}</button>
  const submit = <input className = {classes} type="submit" value={children} />
  const reset = <input className = {classes} type="reset" value={children} />

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

Button.defaultProps = {
  as: 'button',
  type: 'button'
}

export default Button;