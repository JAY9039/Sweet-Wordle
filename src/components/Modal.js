import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>🔥🔥🔥  You Win!  🔥🔥🔥 </h1>
          <p className="solution">{solution}</p>
          <p>❤️ You found the solution in {turn} guesses ❤️</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>👎 You Lost, You iz Noob Peep 👎</h1>
          <p className="solution">{solution}</p>
          {/* <p> Bye Bye Ji </p> */}
          <p> Better Luck Next Time </p>
        </div>
      )}
    </div>
  )
}