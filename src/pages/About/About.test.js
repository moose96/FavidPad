import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('render About page', () => {
    const { getByText } = render(<About />);
    const title = getByText(/About/i);
    expect(title).toBeInTheDocument();
});