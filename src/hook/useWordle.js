import { useState } from 'react'

const useWordle = (solution) => {

    // it starts with 0 and goes upto 6 guesses that the user makes

    const [turn, setTurn] = useState(0) 

    // this is for tracking what the user is typing in the current guess and
    // it gets updated everytime the user hits a new key on the keyboard(this used the hadle key function)

     const [currentGuess, setCurrentGuess] = useState('')
    // each guess is an array each guess stored here is a formatted guess 

    const [guesses, setGuesses] = useState([])

    // this is for storing the past guesses of the user
    // this is used to check if user does not type the same guess word again 

    const [history, setHistory] = useState([]) // each guess is a string

//     // show only when the user wins the game
//     // this us defalut false and used to show print the congratulations or try again

    const [isCorrect, setIsCorrect] = useState(false)

//     // format a guessed word into a array of letter object
//     // [key: 'a', color: 'Green'}]

    const formatGuess = ()=>{

    }

    //add new guess to the guess state
    // update the isCorrect State if the guess is 
    // add one to the turn state

    const addNewGuess= () => {

    }

    //handle ket event and track current guess
    // if the user press the Enter button, then add the New Guess
        
const handleKeyup = ({ key }) => {
    console.log('key pressed ---> ', key)

    if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1))
      return
    }
    // this is the regEx pattern and we are checking this regEx function with the key that is pressed
    if (/^[A-Za-z]$/.test(key)) {
        //currentGuess must be less than 5 since it the the max length or the word
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key)
      }
    }
  }

  return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle