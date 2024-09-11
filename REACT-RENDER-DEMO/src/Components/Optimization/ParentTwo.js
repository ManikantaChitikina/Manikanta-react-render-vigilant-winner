import React from 'react'
import { useState } from 'react'
import { MemoizedChildTwo } from './ChildTwo'
const ParentTwo = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Manikanta');
    console.log("ParentTwo Rendering");
  return (
    <div>
      <button onClick={()=>setCount(c=>c+1)}>Count-{count}</button>
      <button onClick={()=>setName('React')}>Change name</button>
    <MemoizedChildTwo name={name}></MemoizedChildTwo>
    
    </div>
  )
}

export default ParentTwo
