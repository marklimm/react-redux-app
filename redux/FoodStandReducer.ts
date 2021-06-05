import { createSlice, Dispatch } from '@reduxjs/toolkit'

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
  hotdogs: 3,
  fries: 4,
}

const foodStandSlice = createSlice({
  name: 'foodStand',
  initialState,
  reducers: {
    makeBurger(state) {
      if (state.burgers === 10) {
        return
      }

      state.burgers += 1
    },

    makeFries(state) {
      if (state.fries === 10) {
        return
      }

      state.fries += 1
    },

    makeHotDog(state) {
      if (state.hotdogs === 10) {
        return
      }

      state.hotdogs += 1
    },

    sellBurger(state) {
      if (state.burgers === 0) {
        return
      }

      state.burgers -= 1
    },

    sellFries(state) {
      if (state.fries === 0) {
        return
      }

      state.fries -= 1
    },

    sellHotDog(state) {
      if (state.hotdogs === 0) {
        return
      }

      state.hotdogs -= 1
    },
  },
})

export const {
  makeBurger,
  makeFries,
  makeHotDog,
  sellBurger,
  sellFries,
  sellHotDog,
} = foodStandSlice.actions

/**
 * Demonstrates redux thunk by dispatching the makeBurger() action creator after a delay
 * @returns
 */
export const makeBurgerWithDelay =
  () =>
  async (dispatch: Dispatch): void => {
    console.log('inside makeBurgerWithDelay()')
    setTimeout(() => {
      console.log('about to dispatch makeBurger()')
      dispatch(makeBurger())
    }, 1000)
  }

export default foodStandSlice.reducer
