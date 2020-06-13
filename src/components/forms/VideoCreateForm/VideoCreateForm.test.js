import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import VideoCreateForm from './VideoCreateForm';

test('render video create form', () => {
  const { container } = render(
  <MemoryRouter initialEntries={['/video/create']} initialIndex={0}>
    <Route path="/video/create/" component={VideoCreateForm} />
  </MemoryRouter>);

  expect(container).toBeInTheDocument();
})