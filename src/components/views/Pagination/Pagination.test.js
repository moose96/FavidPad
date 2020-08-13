import React from 'react';
import { shallow } from 'enzyme';

import Pagination from './Pagination';
import PaginationElement from './PaginationElement';

describe('test Pagination', () => {
  it('should render 5 pages', () => {
    const wrapper = shallow(<Pagination pages={5} current={1} />);
    const elements = wrapper.find(PaginationElement);

    expect(elements).toHaveLength(5);
  })
});
