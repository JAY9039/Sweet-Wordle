# Sweet-Wordle

# Just a small word Guessing game using ReactJs

> ## Wordle game created using reactJs
> 
> ### Description :
> 
> A CLI based wordle game inspired by [New york times wordle game](https://www.nytimes.com/games/wordle/index.html).

> This game will help you to improve your thinking skills, enhance vocabulary, and analytical skills.

> When it comes to difficulty level CLI based game is better than UI based game though UI based is more interactive. But in CLI based wordle games will make you compelled to use the pen and paper as you will not be able to see the different colors of alphabets and keyboard keys vanishing which are not present in the word.

> In this game you will have to guess a word in six attemps if guessed correctly.

> 

> ### Rules:

> 1. You will have to guess the word of length of 5 letters

> 2. The inputted letters should be from english aplhabets i.e. a to z or A to Z. 

> 3. You will have 6 attemtps to guess the word correctly

> 4. If a letter or letters are present in the word to be guessed, then they will be outputted on the CLI.
>     * If a letter is at correct position the position will be outputted
>     * if a letter is not at correct position the position of that letter will not be outputted
>     * if a letter is repeated in the word then their response will be outputted in serial manner form left to right.

>
> !!! info Libraries used:

> **regex: for handeling user input
> **JSON-SERVER: for handeling user input
> **random: for generating random word

!!! info BASIC GAME RULES :

1. entering words:

 1. user enters a letter & a square is filled with that letter

 2. when a user hits delete it deletes the previous letter

 3. when a user hits enter it submits the word
    1. if all squares are not filled with letters then the word is not submitted
    2. if that word has already been used in a prev guess then the word is not submitted

 4. checking submitted words:
    1. each letter is checked to see if it matches to the solution
    2. each letter is assigned a color based on it's inclusion in the solution
       1. exact matches (correct position in the solution) are green
       2. partial matches (in the solution but not the correct position) are yellow
       3. none-matches (not in the solution at all) are grey
       4. the guess is added the grid with the correct colors
       5. the current guess moves to the next row
       6. the keypad letters are updated (colors)

5. ending the game:
   1. when the guessed word fully matches the solution
      1. modal to say 'well done'
   2. when the user runs out of guesses
      1. modal to say 'unlucky'