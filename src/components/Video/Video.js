import React from 'react';

import VideoUrlParser from './urlparser.js';

function Video({ title,description,url }) {
    const parser = new VideoUrlParser();

    const parseURL = (_url) => {
        const supportedPlatforms = Object.keys(parser);

        for(let platform of supportedPlatforms)
            if(_url.search(platform) !== -1)
                return parser[platform](_url);
    }

    return (
        <div className="video">
            <h2>{title}</h2>
            <iframe width="420px" height="315px"
                src={parseURL(url)} frameBorder="0" title={title}>

            </iframe>
            <p>{description}</p>
        </div>
    );
}

export default Video;