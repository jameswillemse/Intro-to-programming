// --------------------
// Part 1: Basic Greeting
// --------------------

// Declare a variable to hold a name
var name = "James"; // Change this to test other names

// Compare the name using === (strict equality operator)
// If the name is exactly "James", print "Hello me!"
// Otherwise, print "Hello stranger!"
if (name === "James") {
    console.log("Hello me!");
} else {
    console.log("Hello stranger!");
}
// -------------------------------
// Part 2: Greet Mom or Dad Too!
// -------------------------------

// Let's reuse the name variable or set it to someone else
var name = "Dad"; // Try "Mom", "James", or something else

// Use multiple if/else if conditions to handle different cases
if (name === "James") {
    // If name matches yours
    console.log("Hello me!");
} else if (name === "Dad") {
    // If name matches your dad’s name
    console.log("Hi Dad!");
} else if (name === "Mom") {
    // If name matches your mom’s name
    console.log("Hi Mom!");
} else {
    // If it doesn't match any of the known names
    console.log("Hello stranger!");
}