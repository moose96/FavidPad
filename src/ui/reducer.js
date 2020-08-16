import { combineReducers } from 'redux';

import sfxPlayerReducer from './containers/multimedia/SfxPlayer/actions';
import paginationReducer, { pageSizeReducer } from '../video/components/VideoList/actions';
import carouselViewReducer from './containers/view/CarouselView/redux';

export const uiSettingsReducer = combineReducers({
  sfxPlayer: sfxPlayerReducer,
  pagination: pageSizeReducer
});

export default combineReducers({
  sfxPlayer: sfxPlayerReducer,
  pagination: paginationReducer,
  carouselView: carouselViewReducer
});