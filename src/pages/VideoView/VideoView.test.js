import React from 'react';
import { render } from '@testing-library/react';

import VideoView from './VideoView';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

test('render VideoView while loading data',() => {
    const { getByText } = render(
    <MemoryRouter initialEntries={['/video/1']}>
        <VideoView videos={null} loadingData={true} />
    </MemoryRouter>
    );
});
