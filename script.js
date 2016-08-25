// this is from the beginning

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
// substring, positions, and a function

var food = "Hamburgers";
console.log(food.substring(3,10)); // will only say 'burgers'

var rectPerimeter = function (length, width){
    return 2*(length+width);
};


// aug25, adding some loops

var cities = ["Toronto","Montreal","Ottawa","Vancouver","Winnipeg","Calgary"]
for (var i = 0; i < cities.length; i++){
    console.log("There is a hockey team in " + cities[i]);
}

var check = true;
while (check){
    console.log("This loop will run once");
    check = false;
}

var condition = false;
do {
	console.log("A do-while loop will be forced to run once.");
	console.log("It will not run more time's because the while condition is " + condition + "!");	
} while (condition);

// switch statement

var calling = prompt("What would you like your name to be?","Type any name you want here");
switch(calling){
  case 'Terry':
    console.log("Are you Scary Terry?!");
    break;
  case 'Joe':
    console.log("No problem Joe.");
    break;
  case 'Fred':
    console.log("Indeed. Aren't you that burn victim?");
    break;
  case 'Bob':
    console.log("Bob builds things!");
    break;
  default:
    console.log("I can't call you " + calling + " because it's dumb. You get to be called Toby.");
}

// objects
var me = new Object();
me["name"] = "Limit";
me.age = 27;
console.log("My name is " + me.name + " and I am " + me.age + " years old.");

// would be the same as
var meAlso = {
    name: "Limit",
    age: 27
};
console.log("My name is " + meAlso.name + " and I am " + me.Alsoage + " years old!.");
