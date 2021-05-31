import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import { FoodContainer } from './FoodContainer'

/**
 *
 * @returns
 */
export const Fries: FunctionComponent = () => {
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
