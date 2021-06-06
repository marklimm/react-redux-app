import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-toastify'

import { makeBurger, makeHotDog, makeFries } from 'redux/FoodStandReducer'
import { IFoodStandStore } from 'redux/FoodStandStore'

import styles from 'pages/index.module.scss'

/**
 * This Producer component adds food items to the <FoodStand />
 * @returns
 */
export const Producer: FunctionComponent = () => {
  const dispatch = useDispatch()

  const numBurgers = useSelector<IFoodStandStore>((state) => {
    return state.foodStand.burgers
  })
  const numFries = useSelector<IFoodStandStore>(
    (state) => state.foodStand.fries
  )
  const numHotDogs = useSelector<IFoodStandStore>(
    (state) => state.foodStand.hotDogs
  )

  const makeBurgerClicked = () => {
    if (numBurgers >= 5) {
      toast.error(
        `Preston: We're at our burger limit, we need to sell more before I can make another one!`
      )
      return
    }

    dispatch(makeBurger())
  }

  const makeHotDogClicked = () => {
    if (numHotDogs >= 7) {
      toast.error(
        `Preston: We're at our hot dogs limit, we need to sell more before I can make another one!`
      )
      return
    }

    dispatch(makeHotDog())
  }

  const makeFriesClicked = () => {
    if (numFries >= 10) {
      toast.error(
        `Preston: We're at our fries limit, we need to sell more before I can make another one!`
      )
      return
    }

    dispatch(makeFries())
  }

  return (
    <div className=''>
      <h1 className='text-lg font-bold'>Preston Producer</h1>

      <div className='mb-8'>
        <button
          className={`${styles.actionButton}`}
          onClick={makeBurgerClicked}
        >
          Make Burger
        </button>
        <button
          className={`${styles.actionButton}`}
          onClick={makeHotDogClicked}
        >
          Make Hot Dog
        </button>
        <button className={`${styles.actionButton}`} onClick={makeFriesClicked}>
          Make Fries
        </button>
      </div>

      <Image
        src={`/images/preston.png`}
        alt={`Preston Producer`}
        width={163}
        height={312}
      />
    </div>
  )
}
