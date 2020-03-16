import { combineReducers } from 'redux';
import auth from './auth';
import categories from './categories';
import products from './products';

export default combineReducers({
  auth,
  categories,
  products,
})
