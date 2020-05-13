class Hangman { 
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
  }
  calcStatus() {
    const finishedValue = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

    if (finishedValue === true) {
      this.status = 'finished'
    } else if (this.remainingGuesses === 0) {
      this.status = 'failed'
    } else {
      this.status = 'playing'
    }
  }
  get statusMessage() {
    if (this.status === 'playing') {
      return `Remaining guesses: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
      return `Nice try! The word was "${this.word.join('')}"`
    } else if (this.status === 'finished') {
      return 'Congratulations! You guessed the word.'
    }
  }
  makeGuess(guess) {
    guess = guess.toLowerCase()
    if (!this.guessedLetters.includes(guess) && this.status === 'playing') {
      this.guessedLetters.push(guess)
      if (!this.word.includes(guess)) {
        this.remainingGuesses --
      }
  }  
    this.calcStatus()
  }
  get puzzle() {
    let game = ''
    this.word.forEach((letter) => {
        this.guessedLetters.includes(letter) || letter === ' ' ? game += letter : game += '*'
    })
    return game
  }
}

export { Hangman as default }