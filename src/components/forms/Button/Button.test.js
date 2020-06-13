import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Button from './Button'

test('render button', () => {
  const as = ['a', 'link', 'button', 'submit', 'reset'];
  const type = ['button', 'flat', 'flat-contrast'];

  as.forEach((asElement) => {
    type.forEach((typeElement) => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <Button as={asElement} type={typeElement} >Value</Button>
        </MemoryRouter>);

      expect(container).toBeInTheDocument();
    });
  });
});