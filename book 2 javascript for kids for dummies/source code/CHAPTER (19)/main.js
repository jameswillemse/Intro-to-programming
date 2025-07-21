// Create an array for the days of the week (we'll run the lemonade stand Mon–Fri)
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Define different types of possible weather
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

// Set the range for possible daily temperatures
var maxTemp = 110;
var minTemp = 32;

// Set the cost (to you) of each cup of lemonade
var lemonadeCost = 0.5;

// This array will store the temperature for each day
var dailyTemp = [];

// Set up the game: listen for when the "Open The Stand" button is clicked
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

// Generate the weekly weather when the page loads
generateWeather();

/**
 * Function: generateWeather()
 * Description: Chooses random weather and temperature for each weekday
 */
function generateWeather() {
    var weatherToday; // stores today's weather type
    var tempToday;    // stores today's temperature

    // Loop through each weekday
    for (var i = 0; i < days.length; i++) {
        // Pick a random weather type
        weatherToday = weather[Math.floor(Math.random() * weather.length)];

        // Pick a random temperature between minTemp and maxTemp
        tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        // Save the temperature in the dailyTemp array
        dailyTemp[i] = tempToday;

        // Show the weather forecast on the web page
        document.getElementById("5DayWeather").innerHTML +=
            "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" +
            weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

/**
 * Function: openTheStand()
 * Description: Calculates how much lemonade is sold each day and shows the results
 */
function openTheStand() {
    var glassesSold = 160;     // how many glasses sold that day
    var totalGlasses = 1120;    // total glasses sold during the week
    var glassesLeft = 1120;     // how many glasses are still available to sell

    // Clear out old results
    resetForm();

    // Get the user's input values from the form
    var numGlasses = Number(document.getElementById("numGlasses").value);
    var glassPrice = Number(document.getElementById("glassPrice").value);

    // Loop through each day of the week
    for (var i = 0; i < days.length; i++) {

        // Estimate how many glasses will sell: hotter weather = more sales
        glassesSold = Math.floor(dailyTemp[i] / glassPrice);

        // Check how many glasses are still available to sell
        glassesLeft = numGlasses - totalGlasses;

        // Don’t sell more than we have!
        if (glassesSold > glassesLeft) {
            glassesSold = glassesLeft;
        }

        // Update the total for the week
        totalGlasses += glassesSold;

        // Show the number of glasses sold for the day
        document.getElementById("result").innerHTML +=
            "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p>";
    }

    // After the week is over, display a summary of how you did
    displayResults(numGlasses, glassPrice, totalGlasses);
}

/**
 * Function: displayResults()
 * Description: Shows the final weekly report with revenue, costs, and profit
 */
function displayResults(weeklyInventory, glassPrice, weeklySales) {
    // Calculate how much money you made
    var revenue = weeklySales * glassPrice;

    // Calculate how much you spent making the lemonade
    var expense = weeklyInventory * lemonadeCost;

    // How many glasses did you not sell?
    var leftOver = weeklyInventory - weeklySales;

    // How much profit did you make?
    var profit = revenue - expense;

    // Show the final weekly report
    document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " glasses of lemonade this week.</p>";
    document.getElementById("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
    document.getElementById("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p>";
    document.getElementById("result").innerHTML += "<p>Each glass costs you $" + lemonadeCost + ". Your profit was $" + profit + ".</p>";
}

/**
 * Function: resetForm()
 * Description: Clears out old results so we can start a new game
 */
function resetForm() {
    document.getElementById("result").innerHTML = "";
}
