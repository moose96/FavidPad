import React from 'react';

import Button from '../../../ui/components/input/button/Button';
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

export default {
  OK,
  OKCancel,
  YesNo
};