import { combineReducers } from 'redux';

import sfxPlayerReducer from './containers/multimedia/SfxPlayer/actions';
import paginationReducer from '../video/components/VideoList/actions';
import carouselViewReducer from './containers/view/CarouselView/redux';

export default combineReducers({
  sfxPlayer: sfxPlayerReducer,
  pagination: paginationReducer,
  carouselView: carouselViewReducer
});