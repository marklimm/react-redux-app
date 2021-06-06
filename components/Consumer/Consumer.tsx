import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-toastify'

import { sellBurger, sellHotDog, sellFries } from 'redux/FoodStandReducer'
import { IFoodStandStore } from 'redux/FoodStandStore'

import styles from 'pages/index.module.scss'

/**
 * This consumer component buys food items from the <FoodStand />
 * @returns
 */
export const Consumer: FunctionComponent = () => {
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

  const sellBurgerClicked = () => {
    if (numBurgers === 0) {
      toast.error(`Out of burgers!  We need to make more!`)
      return
    }

    dispatch(sellBurger())

    toast.success('Burger sold!')
  }

  const sellHotDogClicked = () => {
    if (numHotDogs === 0) {
      toast.error(`Out of hot dogs!  We need to make more!`)
      return
    }

    dispatch(sellHotDog())

    toast.success('Hot dog sold!')
  }

  const sellFriesClicked = () => {
    if (numFries === 0) {
      toast.error(`Out of fries!  We need to make more!`)
      return
    }

    dispatch(sellFries())

    toast.success('Fries sold!')
  }

  return (
    <>
      <h1 className='text-lg font-bold'>Courtney Consumer</h1>
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
    </>
  )
}
