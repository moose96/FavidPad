import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

test('header test',() => {
    const { getByText } = render(<Header />);
    const title = getByText(/FavidPad/i);
    expect(title).toBeInTheDocument();
});