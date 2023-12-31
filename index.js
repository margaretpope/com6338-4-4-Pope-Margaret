var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]
var wordToGuess = document.getElementById('word-to-guess')
var previousWord = document.getElementById('previous-word')
var incorrectEl = document.getElementById('incorrect-letters')
var remainingEl = document.getElementById('remaining-guesses')
var score = document.querySelector('score')
var winEl = document.getElementById('wins')
var lossEl = document.getElementById('losses')
var win = 0
var loss = 0
var remaining = 10
var word = words[Math.floor(Math.random() * words.length)]
var letterArr = word.split('')

//displays word as underscores; sets remaining to 10
window.onload = function() {
  for (var i = 0; i < letterArr.length; i++) {
    letterArr[i] = "_"
  }
  wordToGuess.textContent = letterArr.join('')
  remainingEl.textContent = remaining
}

//compares pressed key to letters in word array
document.onkeyup = function(e) {
  var guess = e.key.toLowerCase()
  var incorrectArr = []
  var occurancesArr = []
  for (let i = 0; i < letterArr.length; i++) {
    if (letterArr[i] === guess) {
      letterArr[i] = guess
      occurancesArr.push(guess)
      wordToGuess.textContent = occurancesArr(i).replace('_', guess)
    } else {
      remainingEl.textContent = remaining--
      incorrectEl.textContent = incorrectArr.push(guess)
    }
    previousWord.textContent = word
  }
  if (remaining === 0) {
    stop()
  }
  if (wordToGuess === word) {
    win++
    winEl.textContent = win
  } else {
    loss++
    lossEl.textContent = loss
  }
}