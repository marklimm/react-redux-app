import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import { FoodContainer } from './FoodContainer'

/**
 *
 * @returns
 */
const Fries: FunctionComponent = () => {
  // console.log('Fries being rendered')
  return (
    <FoodContainer>
      <Image
        src='/images/fries.png'
        alt='fries'
        layout='fill'
        objectFit='contain'
      />
    </FoodContainer>
  )
}

interface FriesRowUnMemoizedProps {
  numFries: number
}

const FriesRowUnMemoized: FunctionComponent<FriesRowUnMemoizedProps> = ({
  numFries = 0,
}: FriesRowUnMemoizedProps) => {
  return (
    <>
      {Array.from(Array(numFries), (_, i) => (
        <Fries key={i}></Fries>
      ))}
    </>
  )
}

//  I'm using React.memo() here to ensure that the row of Fries is only re-rendered if there's actually been a change to the number of Fries
export const FriesRow = React.memo(
  FriesRowUnMemoized,
  (prevProps, nextProps) => {
    return prevProps.numFries === nextProps.numFries
  }
)
