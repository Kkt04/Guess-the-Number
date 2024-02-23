let gameNum = 3;
let userNum = prompt("Guess the game Number");
while (userNum != gameNum) {
    userNum = prompt("You entered the wrong number. Guess again!");
}
console.log("Congrats! You entered the right number.");
