import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import { FoodContainer } from './FoodContainer'

/**
 *
 * @returns
 */
export const Burger: FunctionComponent = () => {
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
