import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  CREATE_PRODUCT,
  PUT_PRODUCT,
  DELETE_PRODUCT,
} from '../constants'



export function getProducts () {
  return dispathc => dispathc({
    type: GET_PRODUCTS,
    meta: {
      method: 'GET',
      endpoint: `product?all=true`,
    }
  });
}

export function getProductsByIdCategory (idCategory) {
  return dispathc => dispathc({
    type: GET_PRODUCTS,
    meta: {
      method: 'GET',
      endpoint: `product?idCategory=${idCategory}`,
    }
  });
}

export function getByIdProduct (id) {
  return dispathc => dispathc({
    type: GET_PRODUCT_BY_ID,
    meta: {
      method: 'GET',
      endpoint: `product?id=${id}`,
    }
  });
}

export function createProduct (data) {
  return dispathc => dispathc({
    type: CREATE_PRODUCT,
    meta: {
      method: 'POST',
      endpoint: 'product',
      data
    }
  });
}

export function changeProduct (data) {
  return dispathc => dispathc({
    type: PUT_PRODUCT,
    meta: {
      method: 'PUT',
      endpoint: `product?id=${data._id}`,
      data
    }
  });
}

export function deleteProduct (id) {
  return dispathc => dispathc({
    type: DELETE_PRODUCT,
    meta: {
      method: 'DELETE',
      endpoint: `product?id=${id}`,
    }
  });
}
