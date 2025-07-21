// listen for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
function placeOrder() {
    // get form values
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;
    var birthday = document.getElementById("birthday").value;

    // get the pizza price
    var orderPrice = calculatePrice(numPizzas, typePizza);

    // get the delivery price
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

    // create the output
    var theOutput = "<p>Thank you for your order.</p>";

    // output the delivery price, if there is one
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delivery cost is: R" + deliveryPrice;
    }

    theOutput += "<p>Your total is: R" + (orderPrice + deliveryPrice);

    // display the output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

/**
 * calculates pizza price
 */
function calculatePrice(numPizzas, typePizza) {
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;

    // calculate extraCharge, if there is one.
    if (typePizza === "bacon") {
        extraCharge = Number(numPizzas) * 2;
    }

    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;

    // calculate extraCharge, if there is one.
    if (typePizza === "bacon") {
        extraCharge = Number(numPizzas) * 100;
    }
    else if (typePizza === "cheese") {
        extraCharge = Number(numPizzas) * 100;
    }
    else if (typePizza === "sweet chili") {
        extraCharge = Number(numPizzas) * 100;
    }
    else if (typePizza === "thick dow") {
        extraCharge = Number(numPizzas) * 100;
    }
    orderPrice += extraCharge;
    return orderPrice;
}

/**
 * calculates delivery price
 */
function calculateDelivery(orderPrice, deliveryCity, birthday) {
    var deliveryPrice = 0;

    // calculate delivery price, if there is one
    if (((deliveryCity === "Anytown") && (orderPrice >
        10)) || (birthday === "yes")) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 20;
    }
    return deliveryPrice;
}
