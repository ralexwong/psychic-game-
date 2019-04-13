// establishes variables and starting point for the game

var wins = 0;
var losses = 0;
var guesses = 10;
var usedGuesses = [];

var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Takes the inputted letter and compares it to randomly generated computer letter
// updates the variables 
// if the letter is right then the wins increase
// if the letter is wrong then the guesses go down and the letter is pushed into the usedGuesses array
// when guesses reach 0, losses will increase by 1 and resetRound will run


function compareGuesses(userLetter) {

    if (usedGuesses.includes(userLetter)) {
        alert("you already chose that letter :o");
    }

    else if (userLetter == computerGuess) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("Congrats! You won! :)");
        resetRound();
    }
    else if (guesses > 1) {
        guesses--;
        document.getElementById("guesses").innerHTML = guesses;
        usedGuesses.push(userLetter);
        document.getElementById("usedGuesses").innerHTML = usedGuesses;
    }
    else {
        guesses--;
        losses++;
        document.getElementById("losses").innerHTML = losses;
        alert("You lost :(");
        resetRound();
    }
}


// resets guesses and computer's letter


function resetRound() {

    guesses = 10;
    usedGuesses = [];

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("usedGuesses").innerHTML = usedGuesses;


    // Randomly chooses a choice from the letterBank array. This is the Computer's guess.
    computerGuess = letterBank[Math.floor(Math.random() * letterBank.length)];


    // for debugging and for easy wins
    console.log(computerGuess);
}


// starts the first round

window.onload = function() {
    resetRound();
}

// takes the users pressed letter and runs it through function compareGuesses

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    compareGuesses(userGuess);
}