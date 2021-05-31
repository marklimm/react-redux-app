import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import { FoodContainer } from './FoodContainer'

/**
 * This FoodStand component lists the items currently available at the food stand
 * @returns
 */
export const HotDog: FunctionComponent = () => {
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
