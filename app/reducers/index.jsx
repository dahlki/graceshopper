import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  product: require('./product').default,
  products: require('./products').default,
  users: require('./users').default,
  cart: require('./cart').default
})

export default rootReducer
