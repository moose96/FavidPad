import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';

test ('render footer', () => {
  const { getByText } = render(<Footer />);
  const date = new Date();
  const year = date.getFullYear();

  expect(getByText(new RegExp(year.toString()))).toBeInTheDocument();
});