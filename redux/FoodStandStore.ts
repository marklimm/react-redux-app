import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import foodStandReducer from './FoodStandReducer'

const reducer = combineReducers({
  foodStand: foodStandReducer,
})

const FoodStandStore = configureStore({
  reducer,
})

export default FoodStandStore
