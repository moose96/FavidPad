import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import VideoList from './VideoList';
import CarouselView from '../../views/CarouselView';
import ListView from '../../views/ListView';
import reducer from '../../../store';

const store = createStore(reducer);

describe('test VideoList', () => {
  const data = [{
    id: "1",
    title: "vid1",
    description: "",
    url: "https://www.youtube.com/watch?v=fg4yDG4t6"
  }];

  it ('should render CarouselView with data', () => {
    const { wrapper } = mount(
      <Provider store={store}>
        <MemoryRouter>
          <VideoList data={data} />
        </MemoryRouter>
      </Provider>);

    expect(wrapper.exist(CarouselView)).toBeTruthy();

    const video = wrapper.find('.video-container');
    expect(video).toHaveLengthOf(1);
  })

  it ('should render ListView with data', () => {
    const { wrapper } = mount(
      <MemoryRouter>
        <VideoList viewType="listView" data={data} />
      </MemoryRouter>);
    expect(wrapper.exist(ListView)).toBeTruthy();

    const video = wrapper.find('.video-container');
    expect(video).toHaveLengthOf(1);
  })
});