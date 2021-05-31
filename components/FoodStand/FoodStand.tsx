import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

import { FoodStandState } from 'redux/FoodStandReducer'

import { Burger } from 'components/food/Burger'
import { Fries } from 'components/food/Fries'
import { HotDog } from 'components/food/HotDog'

/**
 * This FoodStand component lists the items currently available at the food stand
 * @returns
 */
export const FoodStand: FunctionComponent = () => {
  const numBurgers = useSelector<FoodStandState>((state) => state.burgers)
  const numPizzas = useSelector<FoodStandState>((state) => state.pizzas)
  const numTacos = useSelector<FoodStandState>((state) => state.tacos)

  return (
    <div className=''>
      <h1 className=' text-lg'>Welcome to the Food Stand!</h1>

      <div className=''>
        <div>There are {numBurgers} burger(s) for sale</div>

        <div>There are {numPizzas} pizza(s) for sale</div>

        <div>There are {numTacos} taco(s) for sale</div>
      </div>

      <HotDog />
      <Burger />
      <Fries />
    </div>
  )
}
