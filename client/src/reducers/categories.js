import {
  GET_CATEGORIES,
  GET_CATEGORY_BY_ID,
  CREATE_CATEGORY,
  PUT_CATEGORY,
} from '../constants'

import {
  createReducer,
  createRequestReducer,
} from '../utils';

const initState = {
  isFetching: false,
  categories: null,
  category: null,
  error: null,
};


export default createReducer(initState, {
  [GET_CATEGORIES]: (_state, _action) =>
  createRequestReducer(_state, _action, {
    SEND: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    SUCCESS: (state, action) => {
      return {
        ...state,
        isFetching: false,
        categories: action.response,
      }
    },
    FAIL: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.error,
    }),
  }),


  [GET_CATEGORY_BY_ID]: (_state, _action) =>
  createRequestReducer(_state, _action, {
    SEND: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    SUCCESS: (state, action) => {
      return {
        ...state,
        isFetching: false,
        category: action.response,
      }
    },
    FAIL: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.error,
    }),
  }),


  [CREATE_CATEGORY]: (_state, _action) =>
  createRequestReducer(_state, _action, {
    SEND: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    SUCCESS: (state, action) => {
      return {
        ...state,
        isFetching: false,
        category: action.response,
      }
    },
    FAIL: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.error,
    }),
  }),


  [PUT_CATEGORY]: (_state, _action) =>
  createRequestReducer(_state, _action, {
    SEND: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    SUCCESS: (state, action) => {
      return {
        ...state,
        isFetching: false,
        category: action.response,
      }
    },
    FAIL: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.error,
    }),
  }),
})
