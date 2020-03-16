import {
  GET_CATEGORIES,
  GET_CATEGORY_BY_ID,
  CREATE_CATEGORY,
  PUT_CATEGORY,
  DELETE_CATEGORY,
} from '../constants'



export function getCategories () {
  return dispathc => dispathc({
    type: GET_CATEGORIES,
    meta: {
      method: 'GET',
      endpoint: `category?all=true`,
    }
  });
}

export function getByIdCategory (id) {
  return dispathc => dispathc({
    type: GET_CATEGORY_BY_ID,
    meta: {
      method: 'POST',
      endpoint: `category?id=${id}`,
    }
  });
}

export function createCategory (data) {
  return dispathc => dispathc({
    type: CREATE_CATEGORY,
    meta: {
      method: 'POST',
      endpoint: 'category',
      data
    }
  });
}

export function changeCategory (data) {
  return dispathc => dispathc({
    type: PUT_CATEGORY,
    meta: {
      method: 'PUT',
      endpoint: `category?id=${data._id}`,
      data
    }
  });
}

export function deleteCategory (id) {
  return dispathc => dispathc({
    type: DELETE_CATEGORY,
    meta: {
      method: 'DELETE',
      endpoint: `category?id=${id}`,
    }
  });
}
