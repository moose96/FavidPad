import React from 'react';
import { render } from '@testing-library/react';

import CarouselView from './CarouselView';

test('render carousel view', () => {
  const { container, getAllByText } = render(
    <CarouselView>
      <div>value</div>
      <div>value</div>
    </CarouselView>
  );

  expect(container).toBeInTheDocument();
  const children = getAllByText(/value/i);

  children.forEach((element) => {
    expect(element).toBeInTheDocument();
  })
});