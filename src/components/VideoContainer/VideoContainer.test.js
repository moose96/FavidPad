import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import VideoContainer from './VideoContainer';

test('render video container with loading page', () =>{
  const { container, getByText } = render(<VideoContainer />);
  expect(container).toBeInTheDocument();
  expect(getByText(/Loading/i)).toBeInTheDocument();
});

test('render video container with video', () =>{
  const { container } = render(
    <MemoryRouter>
      <VideoContainer video={{ id: '1234677' }}/>
    </MemoryRouter>
  );
  expect(container).toBeInTheDocument();
  expect(container.querySelector('.video')).toBeInTheDocument();
});