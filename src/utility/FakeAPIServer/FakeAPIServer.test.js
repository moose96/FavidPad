import FakeAPIServer from './FakeAPIServer';

test('test fake api', () => {
    const fakeApi = new FakeAPIServer();

    console.log('list');

    fakeApi.get()
    .then(videos => expect(videos.length).toBeEqual(3));

    fakeApi.get({ id: 1 })
    .then(data => expect(data.video.id).toBeEqual(1));

    fakeApi.get({ id: 4 })
    .then(video => console.log('a'))
    .catch(() => expect(1).toBeEqual(1));
});