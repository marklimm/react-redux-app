import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

import { IFoodStandStore } from 'redux/FoodStandStore'

import { BurgerRow } from 'components/food/BurgerRow'
import { HotDogRow } from 'components/food/HotDogRow'
import { FriesRow } from 'components/food/FriesRow'

/**
 * This FoodStand component lists the items currently available at the food stand
 * @returns
 */
export const FoodStand: FunctionComponent = () => {
  const numBurgers = useSelector<IFoodStandStore>((state) => {
    return state.foodStand.burgers
  }) as number

  const numHotDogs = useSelector<IFoodStandStore>(
    (state) => state.foodStand.hotDogs
  ) as number

  const numFries = useSelector<IFoodStandStore>(
    (state) => state.foodStand.fries
  ) as number

  return (
    <div className='flex flex-col'>
      <h1 className='self-center text-lg font-bold'>
        Welcome to the Food Stand!
      </h1>

      <div className='flex flex-wrap' style={{ minHeight: '70px' }}>
        <BurgerRow numBurgers={numBurgers} />
      </div>

      <div className='flex flex-wrap' style={{ minHeight: '70px' }}>
        <HotDogRow numHotDogs={numHotDogs} />
      </div>

      <div className='flex flex-wrap' style={{ minHeight: '70px' }}>
        <FriesRow numFries={numFries} />
      </div>

      <div className='self-center'>
        <h2 className='text-lg font-bold mt-5'>The stand currently has:</h2>
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

      <div className='self-center mt-4'>
        <h2 className='text-lg font-bold mt-5 text-center'>
          Food Stand Rules:
        </h2>
        <ul>
          <li>
            The stand cannot have more than <span className='font-bold'>5</span>{' '}
            burgers at any given time
          </li>
          <li>
            The stand cannot have more than <span className='font-bold'>7</span>{' '}
            hot dogs at any given time
          </li>
          <li>
            The stand cannot have more than{' '}
            <span className='font-bold'>10</span> fries at any given time
          </li>
        </ul>
      </div>
    </div>
  )
}
