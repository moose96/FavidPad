import React,{ Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import VideoContainer from '../VideoContainer';
import './VideoList.scss';
import CarouselView from '../../views/CarouselView';
import ListView from '../../views/ListView';
import Button from '../../forms/Button';
import ToggleButton from '../../forms/ToggleButton';
import SfxPlayer from '../../multimedia/SfxPlayer';
import ding from '../../../sfx/ding.ogg';
import { toggleSfxPlayer } from '../../multimedia/SfxPlayer/redux';

function VideoList({ viewType, data, limit, onClick, sfxPlayer, toggleSfxPlayer }) {
  // const [videos, setVideos] = useState([{ video_url: '' }]);

  // useEffect(() => {
  //   api.get('/movies')
  //     .then(data => setVideos(data));
  // },[]);

  let view;
  let videosToMap = data;

  // if (limit) {
  //   videosToMap = videos.slice(0, limit);
  // }

  const children = videosToMap.map((element) =>
    <VideoContainer key={element.id} video={element} />
  );

  if (viewType === 'carousel') {
    view = (
      <Fragment>
        <SfxPlayer src={ding}>
          <CarouselView>
            {children}
          </CarouselView>
        </SfxPlayer>
      </Fragment>
    );
  } else if(viewType === 'listView') {
    view = (
      <ListView>
        {children}
      </ListView>
    );
  }

  return (
    <div className="video-list">
      <div className="video-list__header-toolbar">
        <ToggleButton type="flat" value={sfxPlayer} onToggle={toggleSfxPlayer}>
          <ToggleButton.State type="on"><span className="icon icon-volume_up"></span></ToggleButton.State>
          <ToggleButton.State type="off"><span className="icon icon-volume_off"></span></ToggleButton.State>
        </ToggleButton>
      </div>
      {view}
      <div className="video-list__toolbar">
        <Button as="link" type="flat-contrast" linkTo="/video/create">
          <span className="icon icon-plus"></span> Dodaj
        </Button>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    sfxPlayer: state.sfx.active
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSfxPlayer: value => dispatch(toggleSfxPlayer(value))
  }
}

VideoList.propTypes = {
  viewType: PropTypes.string
}

VideoList.defaultProps = {
  viewType: 'carousel'
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);