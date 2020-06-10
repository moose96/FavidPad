import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Video from './Video';


test('render Video component',() => {
    const { getByText,container } = 
        render(
        <MemoryRouter initialEntries={['/']}>
            <Video title="Title" description="Desc" id="1" url="" active/>
        </MemoryRouter>
        );
    const title = getByText(/Title/i);
    const video = container.querySelector('.video');

    expect(title).toBeInTheDocument();
    expect(video.classList).toContain('active');
});