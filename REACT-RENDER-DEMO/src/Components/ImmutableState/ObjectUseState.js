import React from 'react'
import { useState } from 'react'
const initState={
    fname:'Mani',
    lname:'chitikina'

}
const ObjectUseState = () => {
    const [person,setPerson]=useState(initState)
  const changeName=()=>{
    // person.fname='Test'
    // person.lname="testing"
    // setPerson(person)
const newPerson={...person}
newPerson.fname='Test'
newPerson.lname='Testing'
setPerson(newPerson)
    }
    console.log("Object useState Render")
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
