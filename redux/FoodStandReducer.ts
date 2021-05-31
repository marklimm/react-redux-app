import { createAction, createReducer } from '@reduxjs/toolkit'

/**
 * State variables for the FoodStand
 */
export interface FoodStandState {
  burgers: number
  hotdogs: number
  fries: number
}

const initialState: FoodStandState = {
  burgers: 2,
  hotdogs: 4,
  fries: 7,
}

export const makeBurger = createAction('produce/burger')
export const makeHotDog = createAction('produce/hotdog')
export const makeFries = createAction('produce/fries')

export const sellBurger = createAction('consume/burger')
export const sellHotDog = createAction('consume/hotdog')
export const sellFries = createAction('consume/fries')

export const FoodStandReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(makeBurger, (state) => {
      if (state.burgers === 10) {
        return
      }

      state.burgers += 1
    })
    .addCase(makeHotDog, (state) => {
      if (state.hotdogs === 10) {
        return
      }

      state.hotdogs += 1
    })
    .addCase(makeFries, (state) => {
      if (state.fries === 10) {
        return
      }

      state.fries += 1
    })
    .addCase(sellBurger, (state) => {
      if (state.burgers === 0) {
        return
      }

      state.burgers -= 1
    })
    .addCase(sellHotDog, (state) => {
      if (state.hotdogs === 0) {
        return
      }

      state.hotdogs -= 1
    })
    .addCase(sellFries, (state) => {
      if (state.fries === 0) {
        return
      }

      state.fries -= 1
    })
})
