import React from 'react'
import { useState } from 'react'
import Child from './Child';
const Parent = () => {
    const [count,setCount]=useState(0)
    console.log("Use state Rendering");
  return (
    <div>
      <button onClick={()=>setCount(c=>c+1)}>Count-{count}</button>
      <button onClick={()=>setCount(0)}>Count to 0</button>
      <button onClick={()=>setCount(5)}>Count to 5</button>
      <Child></Child>
    </div>
  )
}

export default Parent
