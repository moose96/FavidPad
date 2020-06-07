import React from 'react';

function Text(props) {
  const lineText = <input type="text" {...props} />;
  const multiLineText = <textarea {...props} />;

  return (
    <div className="form-input">
      <label for={props.name}>{props.label}</label>
      {props.multiline ? multiLineText : lineText}
    </div>
  );
}

export default Text;