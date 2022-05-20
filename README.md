# Sweet-Wordle

#-> Just a small word Guessing game using ReactJs<-

> ### Description :
> >>
> A GUI based wordle game inspired by [New york times wordle game](https://www.nytimes.com/games/wordle/index.html).
> This game will help you to improve your thinking skills, enhance vocabulary, and analytical skills.
> In this game you will have to guess a word in six attemps if guessed correctly.

## Set up
1. `https://github.com/JAY9039/Sweet-Wordle.git` 
2. `cd Sweet-Wordle`
3. `npm install`
!!! note You will need to start the json-server and react app saperately
4. `json-server ./data/db.json --port 3001`
5. `npm start start`


## Game Rules :

> 1. You will have to guess the word of length of 5 letters
> 2. The inputted letters should be from english aplhabets i.e. a to z or A to Z. 
> 3. You will have 6 attemtps to guess the word correctly
> 4. If a letter or letters are present in the word to be guessed, then they will be outputted on the CLI.
>     * If a letter is at correct position the position will be outputted
>     * if a letter is not at correct position the position of that letter will not be outputted
>     * if a letter is repeated in the word then their response will be outputted in serial manner form left to right.

 !!! info Libraries used:

> **regex: for handeling user input
>
> **JSON-SERVER: for handeling user input
>
> **random: for generating random word

!!! Game Logic :

> 1. Entering words:
> 2. User enters a letter & a square is filled with that letter
> 3. When a user hits delete it deletes the previous letter
> 4. When a user hits enter it submits the word
 >> If all squares are not filled with letters then the word is not submitted
 >> If that word has already been used in a prev guess then the word is not submitted
> 5.  Checking submitted words:
> 6. Ending the game.
 
!!! info when the guessed word fully matches the solution
      - modal to say '🔥🔥🔥  You Win!  🔥🔥🔥 '
!!! info  when the user runs out of guesses
      - modal to say '👎 You Lost, You iz Noob Peep 👎'
