import React, { Fragment } from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';

import MessageBox from './MessageBox';

describe('test message box', () => {
  const handleReject = () => {};
  const handleSubmit = () => {};

  const testSet = {
    input: ['yes-no', 'ok-cancel'],
    output: [
      ['Tak', 'Nie'],
      ['OK', 'Anuluj']
    ]
  };

  it('should render default message box', () => {
    const wrapper = mount(
      <MessageBox onSubmit={handleSubmit} onReject={handleReject}>
        message
      </MessageBox>
    );
    const messageBox = wrapper.find('.message-box');
    const messageBoxButton = messageBox.find('.message-box__buttons').find('input');
    expect(messageBox.text()).toBe('message');
    expect(messageBoxButton.instance().value).toBe('OK');
  });

  it('should render default message box with custom class name', () => {
    const wrapper = mount(
      <MessageBox className="custom" onSubmit={handleSubmit} onReject={handleReject}>
        message
      </MessageBox>
    );
      const messageBox = wrapper.find('.message-box');
      expect(messageBox.hasClass('custom')).toBe(true);
  });

  testSet.input.forEach((inputType, inputIndex) => {
    it(`should render message box with "${inputType}" type`, () => {
      const wrapper = mount(
        <MessageBox type={inputType} onSubmit={handleSubmit} onReject={handleReject}>
          message
        </MessageBox>
      );
      const messageBox = wrapper.find('.message-box');
      const messageBoxButtons = messageBox.find('.message-box__buttons input');

      messageBoxButtons.forEach((node, nodeIndex) => {
        expect(node.instance().value).toBe(testSet.output[inputIndex][nodeIndex]);
      });
    });
  });

});
