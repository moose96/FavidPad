/** Class for change web page url to video url 
 *  Do not modify _parse method
 *  If you need add new platform, add method with platform name, which is inside web page url
*/

class VideoUrlParser {
    _parse = (api,pattern,url) => {
        return `${api}/${url.slice(url.lastIndexOf(pattern) + pattern.length)}`;
    }

    youtube = (url) => {
        return this._parse('https://youtube.com/embed','?v=',url)
    }

    vimeo = (url) => {
        return this._parse('https://player.vimeo.com/video','/',url)
    }
}

export default VideoUrlParser;