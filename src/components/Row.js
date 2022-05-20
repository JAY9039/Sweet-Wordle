import React from 'react'

export default function Row({ guess, currentGuess }) {

  if (guess) {
    return (
      <div className="row past">

      {/* l = letter and i = index */}

        {guess.map((l, i) => (
          <div key={i} className={l.color}>{l.key}</div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className="row current">

        {letters.map((letter, i) => (
          <div key={i} className="filled">{letter}</div>
        ))}
        {/* // without this the giirs shows is exqual to the typed letters but instead we want exact grids and letters to be filled in it one by one */}
        {[...Array(5 - letters.length)].map((_,i) => (
          <div key={i}></div>
        ))}
      </div>
    )
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
  
}