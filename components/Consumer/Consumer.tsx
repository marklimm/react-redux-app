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
      toast.error(`Selena: Out of burgers!  We need to make more!`)
      return
    }

    dispatch(sellBurger())

    toast.success('Selena: Burger sold!')
  }

  const sellHotDogClicked = () => {
    if (numHotDogs === 0) {
      toast.error(`Selena: Out of hot dogs!  We need to make more!`)
      return
    }

    dispatch(sellHotDog())

    toast.success('Selena: Hot dog sold!')
  }

  const sellFriesClicked = () => {
    if (numFries === 0) {
      toast.error(`Selena: Out of fries!  We need to make more!`)
      return
    }

    dispatch(sellFries())

    toast.success('Selena: Fries sold!')
  }

  return (
    <>
      <h1 className='text-lg font-bold'>Selena Seller (Consumer)</h1>
      <div className='mb-8'>
        <div className='mt-3'>
          <button
            className={`${styles.actionButton}`}
            onClick={sellBurgerClicked}
          >
            Sell Burger
          </button>
        </div>
        <div className='mt-3'>
          <button
            className={`${styles.actionButton}`}
            onClick={sellHotDogClicked}
          >
            Sell Hot Dog
          </button>
        </div>
        <div className='mt-3'>
          <button
            className={`${styles.actionButton}`}
            onClick={sellFriesClicked}
          >
            Sell Fries
          </button>
        </div>
      </div>
      <Image
        src={`/images/courtney.png`}
        alt={`Selena Seller`}
        width={155}
        height={308}
      />
    </>
  )
}
