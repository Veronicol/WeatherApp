import { combineReducers } from 'redux';
import { langReducer } from './lang';

export default combineReducers({lang: langReducer});