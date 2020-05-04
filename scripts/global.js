var firstChar;

// Convert A1 to 01
function parseGuess(guess) {
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  if (guess === 0 || guess.length !== 2) {
    alert('Please enter correct coordinates');
  } else {
    firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert('oops, that is not on the board');
    } else if (
      row < 0 ||
      row >= model.boardSize ||
      column < 0 ||
      column >= model.boardSize
    ) {
      alert("Ooops, that's off the board");
    } else {
      return row + column;
    }

    return null;
  }
}

// Add handler to FIRE button
function init() {
  var fireButton = document.getElementById('fire-button');
  fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById('guess-input');
  guessInput.onkeypress = handleKeyPress;

  model.generateShipLocations();
}

function handleFireButton() {
  var guessInput = document.getElementById('guess-input');
  var guess = guessInput.value;
  controller.processGuess(guess);
  guessInput.value = '';
}

function handleKeyPress(e) {
  var fireButton = document.getElementById('fire-button');
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

window.onload = init;

var result = '';
var i = 0;
do {
  i += 1;
  result += i + ' ';
} while (i > 0 && i < 5);
// Despite i == 0 this will still loop as it starts off without the test

console.log(result);
