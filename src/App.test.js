import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders VideoList inside', () => {
  const { container } = render(<App />);

  const selectors = ['header', 'content', '.footer'];

  selectors.forEach((element) => {
    const subElement = container.querySelector(element);
    expect(subElement).toBeInTheDocument();
  })
});
