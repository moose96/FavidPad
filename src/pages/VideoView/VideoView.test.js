import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import VideoView from './VideoView';

describe('test VideoView', () => {
  it('should render VideoView',() => {
    const { wrapper } = shallow(
      <MemoryRouter initialEntries={['/video/1']}>
          <VideoView />
      </MemoryRouter>
    );

    expect(wrapper.find('.video-view')).toHaveLengthOf(1);
  });
});