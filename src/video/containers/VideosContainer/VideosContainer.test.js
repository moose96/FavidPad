import React from 'react';
import { shallow } from 'enzyme';

import VideosContainer from './VideosContainer';
import VideoList from '../VideoList';

describe('test VideosContainer', () => {
  it ('should rener VideoList', () => {
    const { wrapper } = shallow(<VideosContainer />);
    expect(wrapper.exist(VideoList)).toBeTruthy();
  })
});
