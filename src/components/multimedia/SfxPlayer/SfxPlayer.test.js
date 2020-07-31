import React from 'react';
import { mount } from 'enzyme';

import SfxPlayer from './SfxPlayer';

const TestComponent = ({ playSound }) => {
  return (
    <div onClick={() => playSound()}></div>
  );
}

describe('test SfxPlayer', () => {
  it('should render ok', () => {
    const wrapper = mount(
      <SfxPlayer src="test.ogg">
        <TestComponent />
      </SfxPlayer>
    );

    const player = wrapper.find('audio');
    const component = wrapper.find(TestComponent);

    expect(player.exists()).toBeTruthy();
    // expect(player.prop('src')).toBe('test.ogg');
    expect(component.exists()).toBeTruthy();
    expect(component.prop('playSound')).toBeTruthy();
  })
});
