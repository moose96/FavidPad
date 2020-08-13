import { combineReducers } from 'redux';

import videoListReducer from './ui/containers/view/CarouselView/redux';
import contentReducer from './ui/components/layout/Content/redux';
import sfxPlayerReducer from './ui/containers/multimedia/SfxPlayer/redux';
import pagesizeReducer from './ui/components/input/PageSize/redux';

export default combineReducers({
  videoList: videoListReducer,
  content: contentReducer,
  sfx: sfxPlayerReducer,
  pagesize: pagesizeReducer
});