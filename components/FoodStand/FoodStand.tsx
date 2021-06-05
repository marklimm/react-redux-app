import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

import { FoodStandState } from 'redux/FoodStandReducer'

import { BurgerRow } from 'components/food/BurgerRow'
import { HotDogRow } from 'components/food/HotDogRow'
import { FriesRow } from 'components/food/FriesRow'

/**
 * This FoodStand component lists the items currently available at the food stand
 * @returns
 */
export const FoodStand: FunctionComponent = () => {
  const numBurgers = useSelector<FoodStandState>((state) => {
    return state.foodStand.burgers
  }) as number

  const numHotDogs = useSelector<FoodStandState>(
    (state) => state.foodStand.hotdogs
  ) as number

  const numFries = useSelector<FoodStandState>(
    (state) => state.foodStand.fries
  ) as number

  return (
    <div className='flex flex-col'>
      <h1 className='self-center text-lg font-bold'>
        Welcome to the Food Stand!
      </h1>

      <div className='flex flex-wrap'>
        <BurgerRow numBurgers={numBurgers} />
      </div>

      <div className='flex flex-wrap'>
        <HotDogRow numHotDogs={numHotDogs} />
      </div>

      <div className='flex flex-wrap'>
        <FriesRow numFries={numFries} />
      </div>

      <div className='self-center'>
        <h2 className='text-lg font-bold mt-5'>Summary:</h2>
        <span>The stand has: </span>
        <div>
          <span className='font-bold'>{numBurgers}</span> burger(s) for sale
        </div>

        <div>
          <span className='font-bold'>{numHotDogs}</span> hot dog(s) for sale
        </div>

        <div>
          <span className='font-bold'>{numFries}</span> fries for sale
        </div>
      </div>
    </div>
  )
}
