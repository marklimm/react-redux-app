import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import { FoodContainer } from './FoodContainer'

/**
 * This FoodStand component lists the items currently available at the food stand
 * @returns
 */
const HotDog: FunctionComponent = () => {
  // console.log('hot dog being rendered')
  return (
    <FoodContainer>
      <Image
        src='/images/hotdog.png'
        alt='hot dog'
        layout='fill'
        objectFit='contain'
      />
    </FoodContainer>
  )
}

interface HotDogRowUnMemoizedProps {
  numHotDogs: number
}

const HotDogRowUnMemoized: FunctionComponent<HotDogRowUnMemoizedProps> = ({
  numHotDogs = 0,
}: HotDogRowUnMemoizedProps) => {
  return (
    <>
      {Array.from(Array(numHotDogs), (_, i) => (
        <HotDog key={i}></HotDog>
      ))}
    </>
  )
}

//  I'm using React.memo() here to ensure that the row of HotDogs is only re-rendered if there's actually been a change to the number of HotDogs
export const HotDogRow = React.memo(
  HotDogRowUnMemoized,
  (prevProps, nextProps) => {
    return prevProps.numHotDogs === nextProps.numHotDogs
  }
)
