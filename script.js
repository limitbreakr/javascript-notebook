var food = "Hamburgers";
console.log(food.substring(3,10)); // will only say 'burgers'

var rectPerimeter = function (length, width){
    return 2*(length+width);
};

console.log("A rectangle with length of 4 and width of 5 has a perimeter of " + rectPerimeter(4,5));
// This is an example of a comment that the computer will not read
// but I will!

if (20 / 5 === "Four".length) {
    console.log("Will print out because true.");
} else {
    confirm("A popup will appear because of false");
    prompt("A question popup will enable the user to enter something.");
    console.log("However, I don't yet know how to use that input for anything.");
}
