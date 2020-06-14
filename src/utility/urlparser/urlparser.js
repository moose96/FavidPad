
class VideoUrlParser {
    platforms = [
        {
            platform: 'youtube',
            pattern: '?v=',
            thumbAPI: 'https://i3.ytimg.com/vi',
            thumbEnd: '/hqdefault.jpg'
        },
        {
            platform: 'vimeo',
            pattern: '/',
            thumbAPI: 'https://i.vimeocdn.com/video',
            thumbEnd: '_200x150.jpg'
        }
    ];

    _getVidID = (url,pattern) => {
        return url.slice(url.lastIndexOf(pattern) + pattern.length);
    }

    _parse = (url,res) => {
        if(typeof url === 'undefined')
            return null;
        for(let platform of this.platforms) {
            if(url.search(platform.platform) !== -1) {

                if(res === 'video') {
                    const sources = {
                        type: 'video',
                        sources: []
                    };

                    sources.sources.push({
                        src: this._getVidID(url,platform.pattern),
                        provider: platform.platform
                    });

                    return sources;
                }
                else if(res === 'thumb') {
                    return `${platform.thumbAPI}/${this._getVidID(url,platform.pattern)}${platform.thumbEnd}`;
                }

            }
        }
    }

    parse = (url) => {
        const res = this._parse(url,'video');
        
        if(!res) {
            return {
                type: 'video',
                sources: []
            }
        }
        return res;
    }

    parseThumb = (url) => {
        const res = this._parse(url,'thumb');
        
        if(!res)
            return '';
        else
            return res;
    }
}

export default VideoUrlParser;