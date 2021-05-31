import { configureStore } from '@reduxjs/toolkit'

import { FoodStandReducer } from './FoodStandReducer'

const FoodStandStore = configureStore({ reducer: FoodStandReducer })

export default FoodStandStore
