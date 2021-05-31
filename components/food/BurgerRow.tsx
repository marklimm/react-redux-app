import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import { FoodContainer } from './FoodContainer'

/**
 *
 * @returns
 */
const Burger: FunctionComponent = () => {
  return (
    <FoodContainer>
      <Image
        src='/images/burger.png'
        alt='burger'
        layout='fill'
        objectFit='contain'
      />
    </FoodContainer>
  )
}

interface BurgerRowUnMemoizedProps {
  numBurgers: number
}

const BurgerRowUnMemoized: FunctionComponent<BurgerRowUnMemoizedProps> = ({
  numBurgers = 0,
}: BurgerRowUnMemoizedProps) => {
  return (
    <>
      {Array.from(Array(numBurgers), (_, i) => (
        <Burger key={i}></Burger>
      ))}
    </>
  )
}

//  I'm using React.memo() here to ensure that the row of Burgers is only re-rendered if there's actually been a change to the number of burgers
export const BurgerRow = React.memo(
  BurgerRowUnMemoized,
  (prevProps, nextProps) => {
    return prevProps.numBurgers === nextProps.numBurgers
  }
)
