import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CarouselView from './CarouselView';
import reducer from '../../../store';

const store = createStore(reducer);

test('render carousel view', () => {
  const { container, getAllByText } = render(
    <Provider store={store}>
      <CarouselView>
        <div>value</div>
        <div>value</div>
      </CarouselView>
    </Provider>
  );

  expect(container).toBeInTheDocument();
  const children = getAllByText(/value/i);

  children.forEach((element) => {
    expect(element).toBeInTheDocument();
  })
});