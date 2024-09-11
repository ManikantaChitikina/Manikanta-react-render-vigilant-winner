import React from 'react'
import { useState } from 'react'
const initState=['Manikanta','chitikina']
const ArrayUseState = () => {
    const   [persons,setPersons]=useState(initState)
    const handleClick=()=>{
        // persons.push('Test')
        // persons.push('Testing')
        // setPersons(persons)
const newPersons=[...persons]
newPersons.push('Test')
newPersons.push('Testing')
setPersons(newPersons)
    }
    console.log("Array usestate rendering")
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {
        persons.map(person=>(<div key={person}>{person}</div>))
      }
    </div>
  )
}

export default ArrayUseState
