import React from 'react';
import { shallow } from 'enzyme';

import Text from './Text';

describe('test Text', () => {
  const handleChange = () => {};

  it ('should render input', () => {
    const wrapper = shallow(<Text onChange={handleChange} />);
    const text = wrapper.find('input');
    expect(text).not.toBe(null);
  });

  it ('should render textarea', () => {
    const wrapper = shallow(<Text onChange={handleChange} multiline/>);
    const text = wrapper.find('textarea');
    expect(text).not.toBe(null);
  });
});
