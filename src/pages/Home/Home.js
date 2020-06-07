import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import VideoList from '../../components/VideoList';
import '../../styles/iconmoon/style.scss';

function Home() {
    return(
        <Fragment>
            <div className="home__toolbar">
                <Link to="/video/create"><span className="icon icon-plus"></span> Dodaj</Link>
            </div>
            <VideoList />
        </Fragment>
    );
}

export default Home;