// Code EyesOnMe Component Here
import React from 'react'

function eventHandler(){
  // e.preventDefult()
  console.log("Good!")
}

function EyesOnMe() {
  return (
    <div>
      <button onFocus={eventHandler} onBlur={()=> console.log("Hey! Eyes on me!")}>"Eyes on me"</button>
    </div>
  )
}

export default EyesOnMe