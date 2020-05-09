import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders VideoList inside', () => {
  const { container } = render(<App />);
  const videoList = container.querySelector('.video-list');
  expect(videoList).toBeInTheDocument();
});
