// Get references to the HTML elements
var todayDate = document.getElementById("todaysDate");
var btn = document.getElementById("whattodo");

// Create a new Date object to get today’s date
var d = new Date();

// Display today’s date when the page loads
displayDate();

// Add an event listener to the button
btn.addEventListener("click", displayActivity);

// Function to display the current date
function displayDate() {
  todayDate.innerHTML = d.toDateString();
}

// Function to display an activity based on the day of the week
function displayActivity() {
  var dayOfWeek = d.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  var youShould; // Variable to hold the activity message

  // Choose a message depending on the day
  switch (dayOfWeek) {
    case 0:
      youShould = "Take it easy. You've earned it."; 
      break;
    case 1:
      youShould = "Time to plan your week!";
      break;
    case 2:
      youShould = "Tackle that to-do list!";
      break;
    case 3:
      youShould = "Halfway through — keep going!";
      break;
    case 4:
      youShould = "Almost Friday! Stay strong.";
      break;
    case 5:
      youShould = "Finish strong. Weekend ahead!";
      break;
    case 6:
      youShould = "Relax or go on an adventure!";
      break;
    default:
      youShould = "Oops! Something went wrong.";
  }

  // Display the message in the web page
  document.getElementById("whattodoList").innerHTML = youShould;
}
