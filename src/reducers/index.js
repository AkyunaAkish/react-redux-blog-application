import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import BlogsReducer from './reducer_blogs';

const rootReducer = combineReducers({
  blogs: BlogsReducer,
  form: formReducer
});

export default rootReducer;
