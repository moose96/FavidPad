import React,{useState,useEffect} from 'react';

import VideoList from '../../components/VideoList';

const API_URL = '/database.json';

function Home() {
    const [videos, setVideos] = useState([{url: ''}]);

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setVideos(data));
    },[]);

    return(
        <VideoList videos={videos}/>
    );
}

export default Home;