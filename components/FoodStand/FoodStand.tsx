import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

import { FoodStandState } from 'redux/FoodStandReducer'

import { Burger } from 'components/food/Burger'
import { HotDog } from 'components/food/HotDog'
import { Fries } from 'components/food/Fries'

/**
 * This FoodStand component lists the items currently available at the food stand
 * @returns
 */
export const FoodStand: FunctionComponent = () => {
  const numBurgers = useSelector<FoodStandState>((state) => state.burgers)
  const numHotDogs = useSelector<FoodStandState>((state) => state.hotdogs)
  const numFries = useSelector<FoodStandState>((state) => state.fries)

  return (
    <div className='flex flex-col'>
      <h1 className='self-center text-lg font-bold'>
        Welcome to the Food Stand!
      </h1>

      <div className='flex flex-wrap'>
        {Array.from(Array(numBurgers), (_, i) => (
          <Burger key={i}></Burger>
        ))}
      </div>

      <div className='flex flex-wrap'>
        {Array.from(Array(numHotDogs), (_, i) => (
          <HotDog key={i}></HotDog>
        ))}
      </div>

      <div className='flex flex-wrap'>
        {Array.from(Array(numFries), (_, i) => (
          <Fries key={i}></Fries>
        ))}
      </div>

      <div className='self-center'>
        <h2 className='text-lg font-bold mt-5'>Summary:</h2>
        <div>There are {numBurgers} burger(s) for sale</div>

        <div>There are {numHotDogs} hot dog(s) for sale</div>

        <div>There are {numFries} fry/frie(s) for sale</div>
      </div>
    </div>
  )
}
