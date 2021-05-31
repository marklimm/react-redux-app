import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import { useDispatch } from 'react-redux'

import { sellBurger, sellHotDog, sellFries } from 'redux/FoodStandReducer'

import styles from 'pages/index.module.scss'

/**
 * This consumer component buys food items from the <FoodStand />
 * @returns
 */
export const Consumer: FunctionComponent = () => {
  const dispatch = useDispatch()

  const sellBurgerClicked = () => {
    dispatch(sellBurger())
  }

  const sellHotDogClicked = () => {
    dispatch(sellHotDog())
  }

  const sellFriesClicked = () => {
    dispatch(sellFries())
  }

  return (
    <div className=''>
      <h1 className=' text-lg'>Courtney Consumer</h1>

      <div className='mb-8'>
        <div className='mt-3'>
          <button
            className={`${styles.actionButton}`}
            onClick={sellBurgerClicked}
          >
            Buy Burger
          </button>
        </div>
        <div className='mt-3'>
          <button
            className={`${styles.actionButton}`}
            onClick={sellHotDogClicked}
          >
            Buy Hot Dog
          </button>
        </div>
        <div className='mt-3'>
          <button
            className={`${styles.actionButton}`}
            onClick={sellFriesClicked}
          >
            Buy Fries
          </button>
        </div>
      </div>

      <Image
        src={`/images/courtney.png`}
        alt={`Courtney Consumer`}
        width={155}
        height={308}
      />
    </div>
  )
}
