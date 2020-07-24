import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';

import Content from './Content';
import { MemoryRouter } from 'react-router-dom';

describe('test Content', () => {
  it('should render default content', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Content />
      </MemoryRouter>
    );

    expect(wrapper.find('content')).not.toBe(null);
  });

  it('should render with auto height class', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/video/12356']}>
        <Content />
      </MemoryRouter>
    );
    const content = wrapper.find('content');
    expect(content.hasClass('h-auto')).toBe(true);
  });
});
