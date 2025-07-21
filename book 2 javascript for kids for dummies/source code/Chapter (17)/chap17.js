// Listing 17.5 – Random 5-Day Weather Forecast

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

var maxTemp = 100;
var minTemp = 0;

// Start the forecast generation when the page loads
generateWeather();

function generateWeather() {
    // Get the container where we'll display the weather
    var forecastContainer = document.getElementById("5DayWeather");

    // Clear any previous content (important if this runs more than once)
    forecastContainer.innerHTML = "";

    // Loop through each weekday
    for (var i = 0; i < days.length; i++) {
        // Get random weather condition
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];

        // Get random temperature between min and max
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;

        // Create a new <div> for the day
        var dayDiv = document.createElement("div");
        dayDiv.id = days[i];

        // Use only class names that exist in your CSS (simplified)
        if (weatherToday === "Sunny" || weatherToday === "Raining" || weatherToday === "Cloudy" || weatherToday === "Thunderstorm") {
            dayDiv.className = weatherToday;
        }

        // Add content to the div
        dayDiv.innerHTML = "<b>Forecast for " + days[i] + ":</b><br><br>" +
            weatherToday + " and " + tempToday + " degrees.";

        // Add the div to the forecast container
        forecastContainer.appendChild(dayDiv);
    }
}
