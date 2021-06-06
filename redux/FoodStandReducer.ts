import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

/**
 * State variables for the FoodStand
 */
export interface FoodStandState {
  burgers: number
  hotDogs: number
  fries: number
}

const initialState: FoodStandState = {
  burgers: 2,
  hotDogs: 3,
  fries: 4,
}

const foodStandSlice = createSlice({
  name: 'foodStand',
  initialState,
  reducers: {
    addBurger(state) {
      state.burgers += 1
    },

    addFries(state) {
      state.fries += 1
    },

    addHotDog(state) {
      state.hotDogs += 1
    },

    sellBurger(state) {
      state.burgers -= 1
    },

    sellFries(state) {
      state.fries -= 1
    },

    sellHotDog(state) {
      state.hotDogs -= 1
    },
  },
})

export const {
  addBurger,
  addFries,
  addHotDog,
  sellBurger,
  sellFries,
  sellHotDog,
} = foodStandSlice.actions

/**
 * Demonstrates redux thunk by dispatching the addBurger() action creator after a delay
 * @returns
 */
export const makeBurger =
  () =>
  async (dispatch: Dispatch): void => {
    const makingBurgerToastId = toast.info(
      'Preston:  One burger coming right up!'
    )

    setTimeout(() => {
      dispatch(addBurger())

      toast.dismiss(makingBurgerToastId)
      toast.success('Preston:  Burger is done!')
    }, 1500)
  }

export const makeFries =
  () =>
  async (dispatch: Dispatch): void => {
    const toastId = toast.info('Preston:  Fries coming up!')

    setTimeout(() => {
      dispatch(addFries())

      toast.dismiss(toastId)
      toast.success('Preston:  Fries are done!')
    }, 700)
  }

export const makeHotDog =
  () =>
  async (dispatch: Dispatch): void => {
    const toastId = toast.info('Preston:  One hot dog coming right up!')

    setTimeout(() => {
      dispatch(addHotDog())

      toast.dismiss(toastId)
      toast.success('Preston:  Hot dog is done!')
    }, 900)
  }

export default foodStandSlice.reducer
