import React from 'react';
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
      <MessageBox.OK onSubmit={handleSubmit} onReject={handleReject}>
        message
      </MessageBox.OK>
    );
    const messageBox = wrapper.find('.message-box');
    const messageBoxButton = messageBox.find('.message-box__buttons').find('input');
    expect(messageBox.text()).toBe('message');
    expect(messageBoxButton.instance().value).toBe('OK');
  });

  it('should render default message box with custom class name', () => {
    const wrapper = mount(
      <MessageBox.OK className="custom" onSubmit={handleSubmit} onReject={handleReject}>
        message
      </MessageBox.OK>
    );
      const messageBox = wrapper.find('.message-box');
      expect(messageBox.hasClass('custom')).toBe(true);
  });

  it(`should render message box with "ok-cancel" type`, () => {
    const wrapper = mount(
      <MessageBox.OKCancel onSubmit={handleSubmit} onReject={handleReject}>
        message
      </MessageBox.OKCancel>
    );
    const messageBox = wrapper.find('.message-box');
    const messageBoxButtons = messageBox.find('.message-box__buttons input');

    messageBoxButtons.forEach((node, nodeIndex) => {
      expect(node.instance().value).toBe(testSet.output[1][nodeIndex]);
    });
  });

  it(`should render message box with "ok-cancel" type`, () => {
    const wrapper = mount(
      <MessageBox.YesNo onSubmit={handleSubmit} onReject={handleReject}>
        message
      </MessageBox.YesNo>
    );
    const messageBox = wrapper.find('.message-box');
    const messageBoxButtons = messageBox.find('.message-box__buttons input');

    messageBoxButtons.forEach((node, nodeIndex) => {
      expect(node.instance().value).toBe(testSet.output[0][nodeIndex]);
    });
  });

});
