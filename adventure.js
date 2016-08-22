var age;
age = prompt("How old are you?");

if (age < 13)
{
    console.log("You can play but be warned. LimitBreakr is not responsible for the content you are exposed to.");
}
else
{
    console.log("Great! You're mature enough to go on this adventure!");
}


console.log("The world needs a hero. Someone who is a cool guy and doesn't afraid of anything.");
console.log("A Rooster the size of the Empire State Building appears, surrounded by a think red fog. It's voice bellows...");
var userAnswer = prompt("Are you a bad enough dude to stop the forces of evil? Who are you?!"); 

if (userAnswer === "Limit"){
    console.log("The legends foretold of you. The world needs you.");
}
else {
    console.log("The Rooster frowns and mutters something about inadequacy. The clouds dissipiate and the giant disappears.");
}

var rating = prompt("Please rate the game from 1-10");
if (rating >= 8) {
  console.log("Great! Thank you very much!");
}
else
{
  console.log("Thank you for your input. I am working to learn more code and make improvements.");
}
