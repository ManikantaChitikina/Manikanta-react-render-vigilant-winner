import React from 'react'
import { useState } from 'react'
import { MemoizedChildFive } from './ChildFive'
import { useMemo } from 'react'
import { useCallback } from 'react'
const ParentFour = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Manikanta');
    const person = {
        fname:'Test',
        lname:'testing'
    }
   
const MemoizedPerson = useMemo(()=>person,[]);
const handleClick = () => {} 
const MemoizedHandleClick = useCallback(handleClick,[])
    console.log("ParentFour Rendering");
  return (
    <div>
      <button onClick={()=>setCount(c=>c+1)}>Count-{count}</button>
      <button onClick={()=>setName('React')}>Change name</button>
    {/* <MemoizedChildFive name={name} person={person}></MemoizedChildFive> */}
    {/* <MemoizedChildFive name={name} person={MemoizedPerson}></MemoizedChildFive> */}
    <MemoizedChildFive name={name} handleClick={MemoizedHandleClick}></MemoizedChildFive>
    </div>
  )
}

export default ParentFour
