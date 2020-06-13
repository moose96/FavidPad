import React from 'react';

import './Text.scss';

function Text(props) {
  const lineText = <input type="text" {...props} />;
  let modifiedProps = {...props};
  delete modifiedProps.multiline;
  const multiLineText = <textarea {...modifiedProps} />;
  const asterisk = <span className="form-input__asterisk">*</span>;

  return (
    <div className="form-input">
      <label htmlFor={props.name}>
        {props.label}
        {props.required && asterisk}
      </label>
      {props.multiline ? multiLineText : lineText}
    </div>
  );
}

export default Text;