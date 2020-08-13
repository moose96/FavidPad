import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { mount } from 'enzyme';

import Button from './Button';

describe('test button', () => {
  const as = ['a', 'link', 'button', 'submit', 'reset'];
  const resultSelectors = ['a', 'a', 'button', '[type="submit"]', '[type="reset"]'];
  const type = ['flat', 'flat-contrast'];
  const handleClick = () => {};

  it('should render default button', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Button onClick={handleClick}></Button>
      </MemoryRouter>
    );
    const button = wrapper.find('.button');

    expect(button.type()).toBe('button');
    expect(button.text()).toBe('Button');
  });

  it('should render button with custom text', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Button onClick={handleClick}>Value</Button>
      </MemoryRouter>
    );
    const button = wrapper.find('.button');
    expect(button.text()).toBe('Value');
  });

  it('should render button with default class', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Button Default onClick={handleClick}>Value</Button>
      </MemoryRouter>
    );
    const button = wrapper.find('.button');
    expect(button.hasClass('default')).toBe(true);
  })

  as.forEach((asElement, index) => {
    type.forEach((typeElement) => {
      it(`should render button as ${asElement} with class ${typeElement} type`, () => {
        const wrapper = mount(
          <MemoryRouter initialEntries={['/']}>
            <Button as={asElement} type={typeElement} onClick={handleClick}>Value</Button>
          </MemoryRouter>
        );
        const button = wrapper.find('.button');

        expect(button.is(resultSelectors[index])).toBe(true);
        expect(button.hasClass(`button--${typeElement}`)).toBe(true);
      });
    });
  });

});
