import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('test Footer', () => {
  it('should render footer with correct date', () => {
    const wrapper = shallow(<Footer />);
    const footerParagraph = wrapper.find('.footer p');
    const date = new Date();
    const year = date.getFullYear();

    expect(footerParagraph.text()).toMatch(new RegExp(year.toString()));
  })
});
