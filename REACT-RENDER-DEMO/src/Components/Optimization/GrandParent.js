import React from 'react'
import { useState } from 'react'
import ParentOne from './ParentOne'
import ChildOne from './ChildOne'
const GrandParent = () => {
    const [newCount,SetNewCount]=useState(0)
  return (
    <div>
      <button onClick={()=>SetNewCount((nc) => nc+1)}>GrandParent Count- {newCount}</button>
      <ParentOne newCount={newCount}>
      <ChildOne></ChildOne>
     </ParentOne>
      
    </div>
    
  )
}

export default GrandParent
