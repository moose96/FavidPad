import React from 'react';
import { render } from '@testing-library/react';
import Page404 from './Page404';

test('render Page404',() => {
    const { getByText } = render(<Page404 />);
    expect(getByText('404 not found')).toBeInTheDocument();
});