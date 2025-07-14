
console.log("--------------------Random Insult Generator--------------------------");
// Arrays of parts for the insult
var randomBodyParts = ["disfigured face", "crooked nose", "greasy hair"];
var randomAdjectives = ["foul-odored", "one-brain-celled", "wretched"];
var randomWordsList = ["super skunk", "boar", "rejected lion", "below-average wolf mane", "dumpster rat"];


// Pick a random body part
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

// Pick a random adjective
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

// Pick a random word
var randomWord = randomWordsList[Math.floor(Math.random() * randomWordsList.length)];


// Combine them into an insult
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + ".";


// Output the result
console.log(randomInsult);

//array  
var numbers = [3,2,1];
var comparison = numbers.join(" is bigger than ");
console.log(comparison);
