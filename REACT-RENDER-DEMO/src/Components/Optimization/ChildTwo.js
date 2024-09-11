import React from 'react'
import { useMemo } from 'react'
export const ChildTwo = ({children,name}) => {
    console.log('childTwo render')
  return (
    <div>
      {children} {name}
    </div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo)
