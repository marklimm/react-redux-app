import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { sellBurger, sellPizza, sellTaco } from 'redux/FoodStandReducer'

/**
 * This consumer component buys food items from the <FoodStand />
 * @returns
 */
export const Consumer: FunctionComponent = () => {
  const dispatch = useDispatch()

  const sellBurgerClicked = () => {
    dispatch(sellBurger())
  }

  const sellPizzaClicked = () => {
    dispatch(sellPizza())
  }

  const sellTacoClicked = () => {
    dispatch(sellTaco())
  }

  return (
    <div className=''>
      <h1 className=' text-lg'>Courtney Consumer</h1>

      <div className=''>
        <div className='mt-3'>
          <button onClick={sellBurgerClicked}>Buy Burger</button>
        </div>
        <div className='mt-3'>
          <button onClick={sellPizzaClicked}>Buy Pizza</button>
        </div>
        <div className='mt-3'>
          <button onClick={sellTacoClicked}>Buy Taco</button>
        </div>
      </div>
    </div>
  )
}
