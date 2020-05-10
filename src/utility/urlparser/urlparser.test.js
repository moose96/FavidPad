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
            },
            thumb: 'https://i3.ytimg.com/vi/FgrDGrcgR/hqdefault.jpg'
        },
        {
            src: 'https://vimeo.com/G4r54Mdgh',
            result: {
                type: 'video',
                sources: [{
                    src: 'G4r54Mdgh',
                    provider: 'vimeo'
                }]
            },
            thumb: 'https://i.vimeocdn.com/video/G4r54Mdgh_200x150.jpg'
        }
    ];

    expect(parser).toBeDefined();
    data.forEach((item) => {
        expect(parser.parse(item.src)).toEqual(item.result);
        expect(parser.parseThumb(item.src)).toEqual(item.thumb);
    })
})