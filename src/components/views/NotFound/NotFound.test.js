import React from 'react';
import { render } from '@testing-library/react';

import NotFound from './NotFound';

test('render not found component', () => {
  const { getByText } = render(<NotFound message="message" />);
  expect(getByText(/message/i)).toBeInTheDocument();
});