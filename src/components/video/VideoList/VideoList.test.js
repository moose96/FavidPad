import React from 'react';
import { render } from '@testing-library/react';

import VideoList from './VideoList';
import { MemoryRouter } from 'react-router-dom';

test('render VideoList', () => {
    const data = [{
        id: "1",
        title: "vid1",
        description: "",
        url: "https://www.youtube.com/watch?v=fg4yDG4t6"
    }];

    const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
        <VideoList videos={data} />
    </MemoryRouter>
    );

    const videoTitle = getByText(/vid1/i);
    expect(videoTitle).toBeInTheDocument();
});