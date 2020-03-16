import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  CREATE_PRODUCT,
  PUT_PRODUCT,
} from '../constants'

import {
  createReducer,
  createRequestReducer,
} from '../utils';

const initState = {
  isFetching: false,
  products: null,
  product: null,
  error: null,
};


export default createReducer(initState, {
  [GET_PRODUCTS]: (_state, _action) =>
  createRequestReducer(_state, _action, {
    SEND: (state, action) => ({
      ...state,
      error: null,
      isFetching: true,
    }),
    SUCCESS: (state, action) => {
      return {
        ...state,
        isFetching: false,
        products: action.response,
      }
    },
    FAIL: (state, action) => ({
      ...state,
      isFetching: false,
      products: null,
      error: action.error,
    }),
  }),


  [GET_PRODUCT_BY_ID]: (_state, _action) =>
  createRequestReducer(_state, _action, {
    SEND: (state, action) => ({
      ...state,
      error: null,
      isFetching: true,
    }),
    SUCCESS: (state, action) => {
      return {
        ...state,
        isFetching: false,
        product: action.response,
      }
    },
    FAIL: (state, action) => ({
      ...state,
      isFetching: false,
      product: null,
      error: action.error,
    }),
  }),


  [CREATE_PRODUCT]: (_state, _action) =>
  createRequestReducer(_state, _action, {
    SEND: (state, action) => ({
      ...state,
      error: null,
      isFetching: true,
    }),
    SUCCESS: (state, action) => {
      return {
        ...state,
        isFetching: false,
        product: action.response,
      }
    },
    FAIL: (state, action) => ({
      ...state,
      isFetching: false,
      product: null,
      error: action.error,
    }),
  }),


  [PUT_PRODUCT]: (_state, _action) =>
  createRequestReducer(_state, _action, {
    SEND: (state, action) => ({
      ...state,
      error: null,
      isFetching: true,
    }),
    SUCCESS: (state, action) => {
      return {
        ...state,
        isFetching: false,
        product: action.response,
      }
    },
    FAIL: (state, action) => ({
      ...state,
      isFetching: false,
      product: null,
      error: action.error,
    }),
  }),
})
