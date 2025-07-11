console.log("------ifstatement------")
// Declare a variable named 'name' and assign it the string "parphanax"
var name = "parphanax";

// Output a greeting message to the console, combining "Hello " with the value of the 'name' variable
console.log("Hello " + name);

// Check if the length of the name is greater than 8 characters
if (name.length > 8) {
    // If the condition is true, output a message about the name being long
    console.log("Wow, you have a REALLY long name!");
} 
console.log("------else statement------")
// Declare a variable called 'name' and assign it the value "alexandria"
var name = "alexandria";

// Print a greeting message to the console, including the name
console.log("Hello " + name);

// Check if the length of the name is greater than 7 characters
if (name.length > 7) {
    // If the name is longer than 7 characters, print this message
    console.log("Wow, you have a REALLY long name!");
} else {
    // If the name is 7 characters or fewer, print this message
    console.log("Your name isn't very long.");
}



// Print a label to separate or indicate the start of the 'else if' statement section
console.log("------  else if statement------");

// Declare and initialize variables indicating which dishes are available
var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;

// Use conditional statements to decide what to eat based on what's available
if (lemonChicken) {
    // If lemon chicken is available (true), choose it
    console.log("Great! I'm having lemon and herb chicken!");
} else if (beefWithBlackBean) {
    // If lemon chicken isn't available, but beef with black bean is, choose it
    console.log("I'm having the BBQ beef.");
} else if (sweetAndSourPork) {
    // If neither lemon chicken nor beef is available, but pork is, choose pork
    console.log("OK, I'll have pancooked pork.");
} else {
    // If none of the above dishes are available, default to having rice
    console.log("Well, I guess I'll have rice then.");
}


 

