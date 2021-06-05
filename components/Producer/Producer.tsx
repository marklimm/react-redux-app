import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import {
  makeBurger,
  makeHotDog,
  makeFries,
  makeBurgerWithDelay,
} from 'redux/FoodStandReducer'

import styles from 'pages/index.module.scss'

/**
 * This Producer component adds food items to the <FoodStand />
 * @returns
 */
export const Producer: FunctionComponent = () => {
  const dispatch = useDispatch()

  const makeBurgerClicked = () => {
    // dispatch(makeBurger())
    dispatch(makeBurgerWithDelay())
  }

  const makeHotDogClicked = () => {
    dispatch(makeHotDog())
  }

  const makeFriesClicked = () => {
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
