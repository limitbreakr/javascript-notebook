var userChoice = prompt("Choose: R, P or S");
var randomChoice = Math.random();

console.log("random was " + randomChoice); // displays random number

if (randomChoice < 0.34) {
	randomChoice = "R";
} else if(randomChoice <= 0.67) {
	randomChoice = "P";
} else {
	randomChoice = "S";
} console.log("Computer: " + randomChoice);

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";   
    }
    else if (choice1 === "R") {
        if (choice2 === "S") {
            return "You win with R!";   
        }
        else {
            return "Computer wins with P!";
        }
    }
    else if (choice1 === "P") {
        if (choice2 === "R") {
            return "You win with P!";
        }
        else {
            return "Computer wins with S!";   
        }
    }
    else if (choice1 === "S") {
        if (choice2 === "R") {
            return "Computer wins with R!";   
        }
        else {
            return "You win with S!";   
        }
    }
};

console.log(compare(userChoice, randomChoice));
