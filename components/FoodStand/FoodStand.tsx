import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

import { FoodStandState } from 'redux/FoodStandReducer'

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
    </div>
  )
}
