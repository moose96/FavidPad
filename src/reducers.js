import { combineReducers } from 'redux';

import contentReducer from './ui/components/layout/Content/redux';
import uiReducer, { uiSettingsReducer } from './ui/reducer';

export default combineReducers({
  content: contentReducer,
  ui: uiReducer,
  uiSettings: uiSettingsReducer
});