import axios from 'axios'

import { getCategories } from '../utils'

const SELECT_PRODUCTS = 'SELECT_PRODUCTS'
const RECIEVE_PRODUCTS = 'RECIEVE_PRODUCTS'
const SET_CATEGORIES = 'SET_CATEGORIES'
const SET_SEARCHED_PRODUCTS = 'SET_SEARCHED_PRODUCTS'

const initialProductsState = {
  selectedProducts: null,
  allProducts: null,
  searchedProducts: null,
  categories: null
}

export default (state = initialProductsState, action) => {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case SELECT_PRODUCTS:
      newState.selectedProducts = action.selectedProducts
      break
    case SET_SEARCHED_PRODUCTS:
      newState.searchedProducts = action.searchedProducts
      break
    case RECIEVE_PRODUCTS:
      newState.allProducts = action.products
      break
    case SET_CATEGORIES:
      newState.categories = action.categories
      break
    default:
      return state

  }
  return newState
}

//// ACTION-CREATORS ////

// get products by category
export const selectProducts = selectedProducts => ({
    type: SELECT_PRODUCTS,
    selectedProducts
})

export const setSearchedProducts = searchedProducts => ({
  type: SET_SEARCHED_PRODUCTS,
  searchedProducts
})

export const createCategories = (products) => {
  const categories = getCategories(products)
  return {
    type: SET_CATEGORIES, categories
  }
}

// get all products
export const receiveProducts = products => ({
  type: RECIEVE_PRODUCTS,
  products
})

//// DISPATCH(ACTION) ////
export const fetchProductsByCategory = categoryName => {
  return dispatch => {
    axios.get(`/api/products/category/${categoryName}`)
      .then(products => {
        dispatch(selectProducts(products.data))
      })
  }
}

export const fetchProducts = () => {
  return dispatch => {
    axios.get(`/api/products`)
    .then(products => {
      dispatch(receiveProducts(products.data)) // run test to check that this still works
      dispatch(createCategories(products.data))
    })
  }
}

