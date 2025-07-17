console.log("-------People Array-------");

// Step 1: Declare and show the 'people' array
var people = ["Teddy", "Cathy", "Bobby"];
console.log("The people's Array:", people); // ✅ FIXED: Logging correct array

// Step 2: Change the value of the first element
people[0] = "Georgie";
console.log("After changing the value:", people); // ✅ FIXED

// Step 3: Display the array in the browser (if an element with id="peopleIKnow" exists)
// toString() and valueOf() are similar in output here
document.getElementById("peopleIKnow").innerHTML = people.toString();
// OR
// document.getElementById("peopleIKnow").innerHTML = people.valueOf();

// Step 4: Declare and log 'otherPeople' array
console.log("-------Other People Array-------");
var otherPeople = ["Mary", "Bobby", "Judy", "Eddie", "Herbie", "Tony"];
console.log("The Other people's Array:", otherPeople);

// Step 5: Concatenate arrays without typo
console.log("-------My People Array-------");
var myPeople = people.concat(otherPeople); // ✅ FIXED typo from otherPeople vs otherpeople
console.log("My new combined array:", myPeople);

// Step 6: Perform safe operations on a fresh copy of 'people'
console.log("-------Modifying People Array-------");
people = ["Georgie", "Cathy", "Bobby"]; // ✅ Reset to a valid array before performing more methods

// Display index of a name
console.log("Index of 'Eddie':", people.indexOf("Eddie")); // -1

// Just show joined string, don't overwrite array
console.log("Joined with #: ", people.join(" # "));

// Show last index of 'Bobby'
console.log("Last index of 'Bobby':", people.lastIndexOf("Bobby")); // Should return index

// Continue safely modifying the array
people.pop();               // Removes 'Bobby'
people.push("Teddy");       // Adds 'Teddy' at the end
people.reverse();           // Reverses the array
people.shift();             // Removes first element
people.unshift("Teddy");    // Adds 'Teddy' at the start
people = people.slice(0, 3); // Keeps first 3 elements
people.sort();              // Sorts alphabetically
people.splice(1, 0, "Cathy"); // Inserts 'Cathy' at index 1

console.log("Final people array:", people);
