var fighting = true; //var to check if still fighting
var youHit = Math.floor(Math.random() * 10); //var to check hit
var damageThisRound; // var to track damage
var totalDamage = 0;

while(fighting) {
    if (youHit > 0){
        damageThisRound = Math.floor(Math.random()*5 +1);
        console.log("Congrats you hit the monster for " + damageThisRound + " damage!");
        totalDamage += damageThisRound;
        
        if (totalDamage >= 20){
            console.log("The monster is DEAD!");
            fighting=false;
        } else {
            youHit = Math.floor(Math.random()*10);    
        }
    } else {
        console.log("The monster defeated you!");
        fighting = false;    
    }    
}
