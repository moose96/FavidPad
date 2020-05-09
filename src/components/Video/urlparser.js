
class VideoUrlParser {
    platforms = [
        {
            platform: 'youtube',
            pattern: '?v='
        },
        {
            platform: 'vimeo',
            pattern: '/'
        }
    ];

    // _sourceObj = {
    //     type: 'video',
    //     sources: []
    // };

    parse = (url) => {
        for(let platform of this.platforms) {
            if(url.search(platform.platform) !== -1) {
                const sources = {
                    type: 'video',
                    sources: []
                };

                sources.sources.push({
                    src: url.slice(url.lastIndexOf(platform.pattern) + platform.pattern.length),
                    provider: platform.platform
                });

                return sources;
            }
        }
    }
}

export default VideoUrlParser;