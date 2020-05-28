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

test('render VideoView with router',() => {
    const entries = ['/video/1','/video/2'];
    const data = [{
        id: "1",
        title: "title",
        description: "",
        url: "https://youtube.com/watch?v=fgr34F5D"
    }];
    const results = ['title','Nie znaleziono filmu'];

    for (let i = 0; i < 2; i++) {
        console.log(`Entry: ${entries[i]}`);

        const { getByText } = render(
        <MemoryRouter initialEntries={entries} initialIndex={i}>
            <Switch>
                <Route path="/video/:id">
                    <VideoView videos={data} loadingData={false} />
                </Route>
            </Switch>
        </MemoryRouter>
        );

        expect(getByText(results[i])).toBeInTheDocument();
    }
})