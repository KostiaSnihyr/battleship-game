// Controller responsibilities:
// 1) Get and process the players guess
// 2) Keep track of the number of guesses
// 3) Ask the model to update itself based on the latest guess
// 4) Determine when the game is over (all ships have been sunk)

var controller = {
  guesses: 0,

  processGuess: function (guess) {
    var location = parseGuess(guess);

    if (location) {
      this.guesses++;
      var hit = model.fire(location);

      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(
          `You sunk all battleships, in ${this.guesses} guesses`
        );
      }
    }
  },
};

// controller.processGuess('A0');

// controller.processGuess('A6');
// controller.processGuess('B6');
// controller.processGuess('C6');

// controller.processGuess('C4');
// controller.processGuess('D4');
// controller.processGuess('E4');

// controller.processGuess('B0');
// controller.processGuess('B1');
// controller.processGuess('B2');

// model.fire('06');
// model.fire('16');
// model.fire('26');
// model.fire('20');

// parseGuess('A1');
// console.log(firstChar);
