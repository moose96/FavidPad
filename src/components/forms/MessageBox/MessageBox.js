import React from 'react';

import Button from '../Button';
import MessageBoxTemplate from './MessageBoxTemplate';

function OK({ children, ...props }) {
  return(
    <MessageBoxTemplate {...props} message={children}>
      <Button type="flat-contrast" as='submit' Default={true}>OK</Button>
    </MessageBoxTemplate>
  );
}

function OKCancel({ children, defaultButton, ...props }) {
  return (
    <MessageBoxTemplate {...props} message={children}>
      <Button key={'message-box-button-ok'} type="flat-contrast"
        as='submit' Default={defaultButton === 'submit'}>OK</Button>
      <Button key={'message-box-button-cancel'} type="flat-contrast"
        as='reset' Default={defaultButton === 'reset'}>Anuluj</Button>
    </MessageBoxTemplate>
  );
}

function YesNo({ children, defaultButton, ...props }) {
  return (
    <MessageBoxTemplate {...props} message={children}>
      <Button key={'message-box-button-yes'} type="flat-contrast"
        as='submit' Default={defaultButton === 'submit'}>Tak</Button>
      <Button key={'message-box-button-no'} type="flat-contrast"
        as='reset' Default={defaultButton === 'reset'}>Nie</Button>
    </MessageBoxTemplate>
  );
}


// function MessageBox({ className, children, type, onReject, onSubmit, defaultButton }) {
//   const buttonTypes = ['submit', 'reset'];
//   const buttonLayoutTypes = {
//     'ok': ['OK'],
//     'ok-cancel': ['OK', 'Anuluj'],
//     'yes-no': ['Tak', 'Nie']
//   };

//   return (
//     <form className={`message-box ${className}`} onReset={onReject} onSubmit={onSubmit}>
//       <div className="message-box__message">
//         <p>{children}</p>
//       </div>
//       <div className="message-box__buttons">
//         {buttonLayoutTypes[type].map((element, index) => (
//           <Button type="flat-contrast"
//             Default={buttonTypes[index] === defaultButton}
//             key={`message-box-button-${index}`}
//             as={buttonTypes[index]} >
//             {element}</Button>
//         ))}
//       </div>
//     </form>
//   );
// }

// MessageBox.propTypes = {
//   className: PropTypes.string,
//   children: PropTypes.string.isRequired,
//   type: PropTypes.string,
//   onReject: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   defaultButton: PropTypes.string
// };

// MessageBox.defaultProps = {
//   type: 'ok'
// }

export default {
  OK,
  OKCancel,
  YesNo
};