import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom'

import Content from './Content';
import reducer from '../../../store';

const store = createStore(reducer);

describe('test Content', () => {
  it('should render default content', () => {
    const wrapper = mount(
      <Provider store={store} >
        <MemoryRouter initialEntries={['/']}>
          <Content />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('content')).not.toBe(null);
  });

  // it('should render with auto height class', () => {
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <MemoryRouter initialEntries={['/video/12356']}>
  //         <Content />
  //       </MemoryRouter>
  //     </Provider>
  //   );
  //   const content = wrapper.find('content');
  //   expect(content.hasClass('h-auto')).toBe(true);
  // });
});
