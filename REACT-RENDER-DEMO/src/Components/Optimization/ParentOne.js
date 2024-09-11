import React from 'react'
import { useState } from 'react'
// import Child from '../Parent Child/Child'
const ParentOne = ({children}) => {
    const [count,setCount]=useState(0)
    console.log("Parentone Rendering");
  return (
    <div>
      <button onClick={()=>setCount(c=>c+1)}>Count-{count}</button>
      {/* <Child></Child> */}
      {children}
    </div>
  )
}

export default ParentOne
