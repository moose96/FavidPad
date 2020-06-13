import React from 'react';
import { render } from '@testing-library/react';

import Content from './Content';
import { MemoryRouter } from 'react-router-dom';

test('render content', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Content />
    </MemoryRouter>
    );

  expect(container).toBeInTheDocument();
})