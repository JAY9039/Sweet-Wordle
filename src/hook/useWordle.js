// import { useState } from 'react'

// const useWordle = (solution) => {

//  

//     const [turn, setTurn] = useState(0) 



//      const [currentGuess, setCurrentGuess] = useState('')
//     // each guess is an array each guess stored here is a formatted guess 

//     const [guesses, setGuesses] = useState([])



//     const [history, setHistory] = useState(['hello', 'world']) // each guess is a string



//     const [isCorrect, setIsCorrect] = useState(false)

// //     // format a guessed word into a array of letter object
// //     // [key: 'a', color: 'Green'}]


//     const formatGuess = ()=>
//     {
//     console.log('Formatting The Guess -- ', currentGuess)
//     }



//     const addNewGuess= () => {

//     }


          
// const handleKeyup = ({ key }) => 
// {
//     if(key === 'Enter')
//     {
//         // Only add guess if less than 5
//      if(turn > 5)
//     {
//       console.log("You Used All Your Chances to Guess")
//       return 
//     }
//     if(history.includes(currentGuess))
//     {
//      console.log("You Alreadt Tried this Word");
//      return
//     }     
//     }

import { useState } from 'react'

const useWordle = (solution) => {


  // it starts with 0 and goes upto 6 guesses that the user makes
  const [turn, setTurn] = useState(0) 

  // this is for tracking what the user is typing in the current guess and
  // it gets updated everytime the user hits a new key on the keyboard(this used the hadle key function)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([]) // each guess is an array


      // this is for storing the past guesses of the user
    // this is used to check if user does not type the same guess word again
  const [history, setHistory] = useState(['hello', 'ninja']) // each guess is a string
 
  
  // show only when the user wins the game
  // this us defalut false and used to show print the congratulations or try again
  const [isCorrect, setIsCorrect] = useState(false)

  // format a guess into an array of letter objects 
  // e.g. [{key: 'a', color: 'yellow'}]

//     // this function will console only if the current guess is correct

  const formatGuess = () => 
  {
    console.log('formatting the guess - ', currentGuess)
  }

//     //add new guess to the guess state
//     // update the isCorrect State if the guess is 
//     // add one to the turn state
  const addNewGuess = () => {

  }

    //handle key event and track current guess
    // if the user press the Enter button, then add the New Guess
  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
      // only add guess if turn is less than 5
      if (turn > 5) {
        console.log('you used all your guesses!')
        return
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log('you already tried that word.')
        return
      }
    // Check Word is 5 char Long
    if (currentGuess.length !== 5) {
        console.log('word must be 5 chars.')
        return
      }
      //call this function if and only if all the if block is bypassed
      formatGuess()
    }

    //deleting the letter if typed wrong

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