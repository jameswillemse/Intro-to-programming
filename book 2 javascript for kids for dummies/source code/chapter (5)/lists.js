// Declare variables to store new list item values
var item1;
var item2;
var item3;

// When the button with id "changeList" is clicked, run the newList function
document.getElementById("changeList").onclick = newList;

// This function prompts the user to enter three new items
function newList() {
    item1 = prompt("Enter a new first thing: ");   // Prompt user for first item
    item2 = prompt("Enter a new second thing: ");  // Prompt user for second item
    item3 = prompt("Enter a new third thing: ");   // Prompt user for third item
    updateList();                                   // Call function to update the page
}

// This function updates the list items in the HTML using the entered values
function updateList() {
    document.getElementById("firstThing").innerHTML = item1;   // Update first list item
    document.getElementById("secondThing").innerHTML = item2;  // Update second list item
    document.getElementById("thirdThing").innerHTML = item3;   // Update third list item
}
