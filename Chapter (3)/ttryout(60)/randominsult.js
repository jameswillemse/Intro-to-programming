
//generting a random number between 0 and 1
console.log("random number",Math.random());

//multiply by 8
console.log("random by 8:",Math.random()*8);

//math.floor rounds down to the nearest whole number
console.log(Math.floor(13));

//math.random and math.floor
console.log("Math.floor and Math.random" ,Math.floor(Math.random()* 4))

//random array 
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * 4);
console.log("random word:",randomWords[randomIndex]);

console.log("----------------------------------------------");

console.log("--------------------Random Insult Generator--------------------------");
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Pig", "Stick", "Monkey", "Rat"];

// Pick a random body part from the randomBodyParts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// Pick a random adjective from the randomAdjectives array:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// Pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() * 6)];

// Join all the random strings into a sentence:
var randomInsult = "Your " + randomBodyPart + " is like a " 
 randomAdjective + " " + randomWord +"!!!";
console.log(randomInsult);