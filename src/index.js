
import Hangman from './hangman'
import getPuzzle from './requests'


//Initiate new game 
let game1 = new Hangman('Thor', 3) 


//Display the game
let gameEl = document.querySelector('#puzzle')

//Display remaining Guesses
let guessesEl = document.querySelector('#guesses')

//User enters guesses
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
        game1.makeGuess(guess)
        render()
   
})

const render = () => {
    gameEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {

        let letterSpan = document.createElement('span')
        letterSpan.textContent = letter
        
        gameEl.appendChild(letterSpan)
    })
}


//start a new game 
const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

// Event listener for reset button 
document.querySelector('#reset').addEventListener('click', startGame)

