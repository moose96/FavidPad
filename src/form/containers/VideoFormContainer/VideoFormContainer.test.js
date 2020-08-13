import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import VideoFormContainer from './VideoFormContainer';
import VideoCreateForm from '../VideoCreateForm';

describe('test VideoFormContainer', () => {
  it ('should render VideoCreateForm without data', () => {
    const { wrapper } = shallow(
      <MemoryRouter initialEntries={['/create']}>
        <Route path="/create" component={VideoFormContainer} />
      </MemoryRouter>);
    const form = wrapper.find(VideoCreateForm);
    expect(form).toHaveLengthOf(1);
  })
});
