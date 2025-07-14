// -----------------------------------------
// 1. legendary one eye white: Animal Array
// -----------------------------------------

console.log("------1. legendary one eye white-------"); 
console.log("------ Animals ------");
console.log("---animalsdead---");

// Create an array of animal names
var animals = ["tiger is", "bullshark is", "bear is", "Komodo Dragon is"];

// Create another array for dramatic effect
var animalsdead = ["dead"];

// Loop through each index of the animals array
for (var i = 0; i < animals.length; i++) {
    // Access each animal name using animals[i]
    // Add a dramatic prefix "legendary one eye white" to each name
    animals[i] = "legendary one eye white " + animals[i];
}

// Print the transformed animal names
console.log(animals); // e.g., ["legendary one eye white tiger is", ...]

// Print the dramatic tag showing the animals are 'dead'
console.log(animalsdead); // Outputs: ['dead']


// -------------------------------------
// 2. Random String Generator (16 chars)
// -------------------------------------

console.log("-------- Random String Generator --------");

// A string containing all letters of the English alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Start with a space (or "" if no leading space preferred)
var randomString = " ";

// Keep adding random letters until the string is at least 16 characters long
while (randomString.length < 16) {
    // Generate a random number between 0 and alphabet.length - 1
    var randomIndex = Math.floor(Math.random() * alphabet.length);

    // Use the random index to get a letter from the alphabet string
    var randomLetter = alphabet[randomIndex];

    // Add the letter to the growing random string
    randomString += randomLetter;
}

// Print the final random string, e.g., " xqweurvbasmczlrt"
console.log(randomString);


// -----------------------------
// 3. h4ck3r sp34k Translator
// -----------------------------

console.log(">>> .hack3r sp34k <<<");

// The original sentence we want to translate
var input = "javascript is awesome";

// This will hold the translated hacker-style string
var output = "";

// Loop through each character of the input string
for (var i = 0; i < input.length; i++) {
    var letter = input[i]; // Get the current letter

    // Check if the letter should be replaced with a number
    // Hacker replacements: a -> 4, e -> 3, i -> 1, o -> 0
    if (letter === "a") {
        output += "4";
    } else if (letter === "e") {
        output += "3";
    } else if (letter === "i") {
        output += "1";
    } else if (letter === "o") {
        output += "0";
    } else {
        output += letter; // If no replacement needed, keep the original letter
    }
}

// Print the hacker version of the input
// Should output: j4v4scr1pt 1s 4w3s0m3
console.log(output);
