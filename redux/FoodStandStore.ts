import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import foodStandReducer, { FoodStandState } from './FoodStandReducer'

const reducer = combineReducers({
  foodStand: foodStandReducer,
})

const FoodStandStore = configureStore({
  reducer,
})

export interface IFoodStandStore {
  foodStand: FoodStandState
}

export default FoodStandStore
