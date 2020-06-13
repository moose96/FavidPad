import React from 'react';
import { render } from '@testing-library/react';

import Loading from './Loading';

test('render loading', () => {
  const { getByText } = render(<Loading />);

  expect(getByText(/Ładowanie/i)).toBeInTheDocument();
});