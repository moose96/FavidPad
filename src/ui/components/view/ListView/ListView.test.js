import React from 'react';
import { render } from '@testing-library/react';

import ListView from './ListView';

test('render list view', () => {
  const { container, getAllByText } = render(
    <ListView>
      <div>value</div>
      <div>value</div>
    </ListView>
  );

  expect(container).toBeInTheDocument();
  const children = getAllByText(/value/i);

  children.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});