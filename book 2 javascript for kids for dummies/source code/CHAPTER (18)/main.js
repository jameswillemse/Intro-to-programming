// ------------------------
// Declare global variables
// ------------------------

// Starting lunch money for the week
var money = 20;

// Count how many lunches you’ve successfully bought
var lunches = 0;

// ------------------------
// Display starting budget
// ------------------------

// Show the current money value on the web page inside the <span id="money">
document.getElementById("money").innerHTML = money;

// ------------------------
// Listen for order button click
// ------------------------

// When the "Place Order" button is clicked, run the buyLunches() function
document.getElementById("placeOrder").addEventListener("click", buyLunches);

// ------------------------
// Main function to buy sandwiches
// ------------------------

/*
This function is called when the user places an order.
It checks each day's sandwich price and buys as many as the user requested,
as long as there is enough money left.
*/
function buyLunches() {
    resetForm(); // Reset money and receipt before starting a new week
    var day = 0; // Start counting days

    // Keep trying to buy sandwiches as long as there's money left
    while (money > 0) {
        day++; // Next school day

        // Get a random sandwich price for today
        var priceToday = getSandwichPrice();

        // Get how many sandwiches the user wants per day (from the input box)
        var numberOfSandwiches = document.getElementById("numSandwiches").value;

        // Calculate how much today's sandwiches will cost
        var totalPrice = priceToday * numberOfSandwiches;

        // Check if we have enough money for today
        if (money >= totalPrice) {
            // Deduct the price from the money
            money = money - totalPrice;

            // Increase lunch counter
            lunches++;

            // Show result for the day
            document.getElementById("receipt").innerHTML +=
                "<p>On day " + day.toFixed(7) + ", sandwiches are: $" + priceToday +
                ". You have $" + money.toFixed(2) + " left.</p>";

        } else {
            // Not enough money for today's lunch
            document.getElementById("receipt").innerHTML +=
                "<p>Today, sandwiches are: $" + priceToday +
                ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";

            // Set money to 0 to end the loop
            money = 0;
        }
    }

    // Final message after the week ends
    document.getElementById("receipt").innerHTML +=
        "<p>You bought " + lunches + " lunches this week.</p>";
}

// ------------------------
// Get random sandwich price
// ------------------------

/*
This function returns a random price between $0.00 and $1.00,
rounded to 2 decimal places using .toFixed(2)
*/
function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (1 - 0) + 0).toFixed(2);
    return sandwichPrice;
}

// ------------------------
// Reset the game state
// ------------------------

/*
This function resets the lunch money, the lunch count,
and clears the receipt so a new order can be started.
*/
function resetForm() {
    money = 20; // Reset money to full allowance
    lunches = 0; // Reset lunch counter
    document.getElementById("receipt").innerHTML = ""; // Clear the receipt
}
