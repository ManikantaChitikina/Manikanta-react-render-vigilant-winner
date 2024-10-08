import React from 'react'
import { useReducer } from 'react'

const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':return state+1
        case 'decrement':return state-1
        case 'reset':return initialState
        default: return state
    }
}
const UseReducer = () => {
const [count,dispatch]=useReducer(reducer,initialState)
console.log("use reducer rendering");
  return (
    <div>
        <div>Count-{count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}

export default UseReducer
