import { combineReducers } from 'redux';

import videoListReducer from './components/views/CarouselView/redux';
import contentReducer from './components/template/Content/redux';

export default combineReducers({
  videoList: videoListReducer,
  content: contentReducer
});