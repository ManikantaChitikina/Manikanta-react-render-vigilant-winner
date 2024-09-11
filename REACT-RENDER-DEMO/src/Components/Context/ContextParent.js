import React from 'react'
import { useState } from 'react'
import { ChildA } from './ContextChildren'
import { MemoizedChildA } from './ContextChildren';
export const CountContext=React.createContext();
const CountProvider =CountContext.Provider
const ContextParent = ({children}) => {
    const [count,setCount]=useState(0)
    console.log('Context parent render')
  return (
    <div>
      <button onClick={()=>setCount(c=>c+1)}>Count -{count}</button>
      <CountProvider value={count}>
      {/* <ChildA></ChildA> */}
      {/* <MemoizedChildA></MemoizedChildA> */}
      {children}
      </CountProvider>
      
    </div>
  )
}

export default ContextParent
