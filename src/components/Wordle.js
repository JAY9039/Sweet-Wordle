import React, { useState, useEffect } from 'react'
import useWordle from '../hook/useWordle'

// components
import Grid from './Grid.js'
import Keypad from './Keypad.js' 
import Modal from './Modal'

export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup, usedKeys } = useWordle(solution)

  const [showModal, setShowModal] = useState(false)

//   // everytime user press a key on the keyboard this will run this event listner function
useEffect(() => 
{
   window.addEventListener('keyup', handleKeyup)

   //this detaches the event listner
  //takes care for multiple keyup function not to be fired

  if (isCorrect) {
    setTimeout(() => setShowModal(true), 2400)
    window.removeEventListener('keyup', handleKeyup)
  }
  if (turn > 5) {
    setTimeout(() => setShowModal(true), 2400)
    window.removeEventListener('keyup', handleKeyup)
  }

  return () => window.removeEventListener('keyup', handleKeyup)
}, [handleKeyup, isCorrect, turn])

// this console logs the array that contains the guess and their turns withing an array

// useEffect(() => {
//   console.log(guesses, turn, isCorrect)
// }, [guesses, turn, isCorrect])

return (
  <div>
    <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
    <Keypad usedKeys={usedKeys} />
    {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
  </div>
)
}


  
 

