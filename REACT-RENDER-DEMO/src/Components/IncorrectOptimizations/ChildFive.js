import React from 'react'

const ChildFive = ({name, person}) => {
    console.log('childfive render')
  return (
    <div>
      {/* Hello {name} {person.fname} {person.lname}  */}
      Hello {name} 
    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)