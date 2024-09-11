import React from 'react'
import { useContext } from 'react'
import { CountContext } from './ContextParent'
// const ContextChildren = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }
export const ChildA = () => {
    console.log('Child A rendering')
    return (
      <div>
        Child A
        <ChildB></ChildB>
      </div>
    )
  }
  export const MemoizedChildA = React.memo(ChildA)
  export const ChildB = () => {
    console.log('Child B rendering')
    return (
      <div>
        Child B
        <ChildC></ChildC>
      </div>
    )
  }
  export const ChildC = () => {
    const count=useContext(CountContext)
    console.log('Child C rendering')
    return (
      <div>
        Child C count={count}
        
      </div>
    )
  }

// export default ContextChildren
