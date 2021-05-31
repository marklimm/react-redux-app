import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { makeBurger, makePizza, makeTaco } from 'redux/FoodStandReducer'

import styles from 'pages/index.module.scss'

/**
 * This Producer component adds food items to the <FoodStand />
 * @returns
 */
export const Producer: FunctionComponent = () => {
  const dispatch = useDispatch()

  const makeBurgerClicked = () => {
    dispatch(makeBurger())
  }

  const makePizzaClicked = () => {
    dispatch(makePizza())
  }

  const makeTacoClicked = () => {
    dispatch(makeTaco())
  }

  return (
    <div className=''>
      <h1 className=' text-lg'>Preston Producer</h1>

      <div className='mb-8'>
        <button
          className={`${styles.actionButton}`}
          onClick={makeBurgerClicked}
        >
          Make Burger
        </button>
        <button className={`${styles.actionButton}`} onClick={makePizzaClicked}>
          Make Pizza
        </button>
        <button className={`${styles.actionButton}`} onClick={makeTacoClicked}>
          Make Taco
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
