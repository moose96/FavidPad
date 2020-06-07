import React from 'react';
import { Switch } from 'react-router-dom';

import './Content.scss';

function Content ({ children }) {
    return (
        <content>
            <Switch>
                {children}
            </Switch>
        </content>
    );
}

export default Content;