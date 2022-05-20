import React, { useEffect } from 'react'
import useWordle from '../hook/useWordle'
import Grid from './Grid'

export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup } = useWordle(solution)

//   // everytime user press a key on the keyboard this will run this event listner function
useEffect(() => 
{
   window.addEventListener('keyup', handleKeyup)

   //this detaches the event listner
  //takes care for multiple keyup function not to be fired

  return () => window.removeEventListener('keyup', handleKeyup)
}, [handleKeyup])

// this console logs the array that contains the guess and their turns withing an array


useEffect(() => {
  console.log(guesses, turn, isCorrect)
}, [guesses, turn, isCorrect])

return (
  <div>
    <div>solution - {solution}</div>
    <br />
    <br />
    <div>Current Guess - {currentGuess}</div>
    <Grid currentGuess={currentGuess} guesses={guesses} turn = {turn} />
    </div>
)
}


  
 

