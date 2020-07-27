import React from 'react';
import { mount } from 'enzyme';

import VideoCreateForm from './VideoCreateForm';

describe('test VideoCreateForm', () => {
  it ('should render ok', () => {
    const { wrapper } = mount(<VideoCreateForm />);
    const form = wrapper.find('form');

    expect(form).toHaveLengthOf(1);
  })
});
