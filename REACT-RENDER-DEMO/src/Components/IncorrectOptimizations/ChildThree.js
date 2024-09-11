import React from 'react'

export const ChildThree = () => {
    console.log('ChildThree render')
  return (
    <div>
      Child three  Component
    </div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)
