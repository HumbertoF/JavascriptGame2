(function () {

    // Global Variables 
 let userHealth = 40;  
 let grantHealth = 10;
 let wins = 0; 
 let userName;

//  Function to ask for input 
function StartGame() {
 
let greeting = prompt("Would you like to play a game?");

if (greeting.toLowerCase() === "yes"){
    let userName = prompt("What is your name?");
    console.log(`Let's Begin! ${userName}'s Starting Health is ${userHealth}, and Grant's Starting Health is ${grantHealth}`);
    startCombat();
}



// Function to loop and calculate results 
function startCombat() {
    
    while (userHealth >= 0 && wins < 3) {
        if (grantHealth <= 0) {
            grantHealth = 10;
            wins++;
            console.log( "Grant has been defeated" );
        } else {   
        grantHealth -= Math.floor(Math.random()* 2 + 1);
        userHealth-= Math.floor(Math.random() * 2 + 1);
        console.log(`${userName}'s Health: ${userHealth}`); 
        console.log(`Grant's Health: ${grantHealth}`);
        }   
    }
   if (wins === 3) {
        console.log(`Grants has been defetead 3 times. That means that you are the winner ${userName}.  CONGRATULATIONS!!!!`);
    }   

     else if (greeting === "no") {
    console.log("ugh... Ok, maybe next time?");pageYOffset
    }
    
}   
} 
 
  StartGame();
} )();