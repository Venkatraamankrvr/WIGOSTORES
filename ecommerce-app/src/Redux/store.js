import { applyMiddleware, combineReducers, createStore } from 'redux'
import { productDetailsReducer, productListReducer } from './Reducers/ProductReducers'

import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const reducer = combineReducers({ productList: productListReducer, productDetails: productDetailsReducer })

const intialState = {}

const middleware = [thunk]

export const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
)