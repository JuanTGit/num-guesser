function randomizer(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

const number = randomizer(1, 100)

const input = document.getElementById("user-guess")
const submitGuess = document.getElementById('user-submit')
const guessedNumber = document.getElementById('computer-number')
const tryCounter = document.getElementById('num-trys')

let attempts = 0


function checkGuess() {
	const userGuess = Number(input.value);
	attempts++
	if (userGuess > number) {
		console.log('Number is too big')
		guessedNumber.innerText = `${userGuess} is too big!`
		tryCounter.innerText = `${attempts}`
	} else if (userGuess < number) {
		console.log('Guess is too low')
		guessedNumber.innerText = `${userGuess} is too low!`
		tryCounter.innerText = `${attempts}`
	} else {
		alert('Congratulations you guessed it!')
		guessedNumber.innerText = `${userGuess} is Correct! You got it in ${attempts} attempts!`
		attempts = 0
		tryCounter.innerText = `${attempts}`
	}
}

submitGuess.addEventListener('click', () => checkGuess())

