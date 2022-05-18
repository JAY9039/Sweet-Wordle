import React from 'react'
import { useEffect } from "react"

import useWordle from '../hook/useWordle'

export default function Wordle({solution}) {



    const { currentGuess, handleKeyup} = useWordle(solution)

    // everytime user press a key on the keyboard this will run this event listner function
    useEffect(() => {
      window.addEventListener('keyup', handleKeyup)
      
      //this detaches the event listner
      //takes care for multiple keyup function not to be fired
    
      return () => window.removeEventListener('Keyup, handleKeyup')
    })
   


  return (
    <div>Wordle</div>
  )
}
