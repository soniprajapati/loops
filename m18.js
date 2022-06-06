console.log("GUESS THE NUMBER")
console.log("Guess the magician's secret number! ")

console.log()
console.log("Pick a number between 1 and 10.You will have 5 turns.")

number = Math.floor(Math.random()*11);
        // console.log(number);
        var a = require("readline-sync")
        guess=a.questionInt("guess a number:")
            do {
                guess =a.questionInt("Keep guessing!");
                if (number < guess) {
                    console.log("You've guessed too high!");
                } else if (number > guess) {
                    console.log("You've guessed too low!");
                } else{
                    console.log("Good Job!");
                }
            } while (guess != number);