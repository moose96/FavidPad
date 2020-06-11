import React from 'react';

import './Text.scss';

function Text(props) {
  const lineText = <input type="text" {...props} />;
  const multiLineText = <textarea {...props} />;
  const asterisk = <span className="form-input__asterisk">*</span>;

  return (
    <div className="form-input">
      <label for={props.name}>
        {props.label}
        {props.required && asterisk}
      </label>
      {props.multiline ? multiLineText : lineText}
    </div>
  );
}

export default Text;