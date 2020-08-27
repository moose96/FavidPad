import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import useOrientation from '../../hooks/useOrientation';
import VideosContainer from '../../video/containers/VideosContainer';
import ToggleButton from '../../ui/components/input/button/ToggleButton';
import SfxButton from '../../ui/components/input/button/SfxButton';
import '../../styles/iconmoon/style.scss';
import '../styles.scss';
import './Home.scss';
import ding from '../../assets/sfx/ding.ogg';

import { toggleSfxPlayer } from '../../ui/containers/multimedia/SfxPlayer/actions';

function Home({ sfxPlayer, onSfxPlayerToggle }) {
  const orientation = useOrientation();

  let listViewType = '';
  if (orientation === 'landscape') {
    listViewType = 'carousel';
  } else if (orientation === 'portrait') {
    listViewType = 'listView';
  }

  return (
    <div className="home">
      <div className="home__toolbar-top">
        <ToggleButton type="flat" value={sfxPlayer} onToggle={value => onSfxPlayerToggle(value)}>
          <ToggleButton.State type="on"><span className="icon icon-volume_up"></span></ToggleButton.State>
          <ToggleButton.State type="off"><span className="icon icon-volume_off"></span></ToggleButton.State>
        </ToggleButton>
      </div>
      <VideosContainer viewType={listViewType} />
      <div className="home__toolbar-bottom">
        <SfxButton as="link" type="flat-contrast" linkTo="/video/create" onHoverSfx={ding}>
          <span className="icon icon-plus"></span> Dodaj
        </SfxButton>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
    sfxPlayer: state.uiSettings.sfxPlayer.active
});

const mapDispatchToProps = dispatch => ({
  onSfxPlayerToggle: value => dispatch(toggleSfxPlayer(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);