import React from 'react'
import { useState } from 'react'
import { MemoizedChildThree } from './ChildThree'
import { MemoizedChildFour } from './ChildFour'
const ParentThree = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Manikanta');
    console.log("ParentThree Rendering");
  return (
    <div>
      <button onClick={()=>setCount(c=>c+1)}>Count-{count}</button>
      <button onClick={()=>setName('React')}>Change name</button>

    {/* <MemoizedChildThree name={name}>
       <strong>Hello</strong> 
    </MemoizedChildThree> */}
    <MemoizedChildFour name={name}></MemoizedChildFour>
    
    </div>
  )
}

export default ParentThree
