import { combineReducers } from 'redux';
import auth from './auth';
import categories from './categories';
import product from './product';

export default combineReducers({
  auth,
  categories,
  product,
})
