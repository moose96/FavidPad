import React from 'react';
import {PlyrComponent} from 'plyr-react';

import VideoUrlParser from './urlparser.js';

function Video({ title,description,url }) {
    const parser = new VideoUrlParser();
     let options = {...PlyrComponent.defaultProps.options};
    options.controls = [...options.controls,'play-large'];
    // options.settings = ['captions', 'quality', 'speed', 'loop'];

    return (
        <div className="video">
            <h2>{title}</h2>
            <PlyrComponent sources={parser.parse(url)} options={options} />
            <p>{description}</p>
        </div>
    );
}

export default Video;