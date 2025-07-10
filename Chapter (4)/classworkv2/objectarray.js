//Array of friends:
// Define the Friend Objects
var henre = {
    name: "henre",
    age: 5,
    occupation:"electricion",
    luckyNumbers: [6, 9, 20]
};

var calip = {
    name: "calip",
    age: 20,
    occupation:"tech hardware repair",
    luckyNumbers: [1, 2, 3]
};

//Create an Array of Friends:
//The friends array now holds three elements, each of which is an object representing a friend.
var friends = [ henre, calip];

// Accessing Objects in the Array:
console.log("Friend Object: ", friends[0]);

// Accessing Properties within an Object:
console.log("Friend Name: ", friends[0].name);

// Accessing Nested Arrays within Objects:
console.log("Lucky Number: ", friends[0].luckyNumbers[1]);



