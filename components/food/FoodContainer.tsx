import React, { FunctionComponent } from 'react'

/**
 *
 * @returns
 */
// eslint-disable-next-line react/prop-types
export const FoodContainer: FunctionComponent = ({ children }) => {
  return (
    <div style={{ position: 'relative', width: '70px', height: '70px' }}>
      {children}
    </div>
  )
}
