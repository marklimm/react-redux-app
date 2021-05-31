import { createAction, createReducer } from '@reduxjs/toolkit'

/**
 * State variables for the FoodStand
 */
export interface FoodStandState {
  burgers: number
  pizzas: number
  tacos: number
}

const initialState: FoodStandState = {
  burgers: 0,
  pizzas: 0,
  tacos: 0,
}

export const makeBurger = createAction('produce/burger')
export const makePizza = createAction('produce/pizza')
export const makeTaco = createAction('produce/taco')

export const sellBurger = createAction('consume/burger')
export const sellPizza = createAction('consume/pizza')
export const sellTaco = createAction('consume/taco')

export const FoodStandReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(makeBurger, (state) => {
      if (state.burgers === 10) {
        return
      }

      state.burgers += 1
    })
    .addCase(makePizza, (state) => {
      if (state.pizzas === 10) {
        return
      }

      state.pizzas += 1
    })
    .addCase(makeTaco, (state) => {
      if (state.tacos === 10) {
        return
      }

      state.tacos += 1
    })
    .addCase(sellBurger, (state) => {
      if (state.burgers === 0) {
        return
      }

      state.burgers -= 1
    })
    .addCase(sellPizza, (state) => {
      if (state.pizzas === 0) {
        return
      }

      state.pizzas -= 1
    })
    .addCase(sellTaco, (state) => {
      if (state.tacos === 0) {
        return
      }

      state.tacos -= 1
    })
})
