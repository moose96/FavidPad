import VideoUrlParser from './urlparser';

test('test parse',() => {
    const parser = new VideoUrlParser();

    const data = [
        {
            src: 'https://youtube.com/watch?v=FgrDGrcgR',
            result: {
                type: 'video',
                sources: [{
                    src: 'FgrDGrcgR',
                    provider: 'youtube'
                }]
            }
        },
        {
            src: 'https://vimeo.com/G4r54Mdgh',
            result: {
                type: 'video',
                sources: [{
                    src: 'G4r54Mdgh',
                    provider: 'vimeo'
                }]
            }
        }
    ];

    data.forEach((item) => {
        expect(parser).toBeDefined();
        expect(parser.url(item.src)).toEqual(item.result);
    })
})