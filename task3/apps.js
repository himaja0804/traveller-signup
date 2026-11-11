
import {
    flights,
    filterByMaxPrice,
    filterByStops,
    sortByPrice,
    sortByDeparture,
    cheapestPerAirline
} from "./flights.js";


// HTML elements

const maxPriceInput = document.getElementById("maxPrice");
const maxStopsInput = document.getElementById("maxStops");
const sortByInput = document.getElementById("sortBy");

const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
const cheapestBtn = document.getElementById("cheapestBtn");

const flightList = document.getElementById("flightList");
const flightCount = document.getElementById("flightCount");
const resultTitle = document.getElementById("resultTitle");


// Display flights

function displayFlights(flightData) {

    flightList.innerHTML = "";

    flightCount.textContent = `Showing ${flightData.length} flights`;

    if (flightData.length === 0) {

        flightList.innerHTML =
            `<div class="no-flights">No flights found!</div>`;

        return;
    }

    flightData.forEach(flight => {

        const card = document.createElement("div");

        card.className = "flight-card";

        card.innerHTML = `
            <h3>${flight.airline}</h3>

            <div class="flight-route">
                <strong>${flight.from}</strong>
                <span>✈</span>
                <strong>${flight.to}</strong>
            </div>

            <div class="flight-details">
                <p>Flight ID: ${flight.id}</p>
                <p>Departure: ${flight.departure}</p>
                <p>Stops: ${flight.stops}</p>
            </div>

            <div class="flight-price">
                ₹${flight.price.toLocaleString("en-IN")}
            </div>
        `;

        flightList.appendChild(card);

    });
}


// Search flights

function searchFlights() {

    const maxPrice = Number(maxPriceInput.value);
    const maxStops = Number(maxStopsInput.value);

    let result = [...flights];

    // Price filter

    if (maxPriceInput.value !== "") {
        result = filterByMaxPrice(result, maxPrice);
    }

    // Stops filter

    result = filterByStops(result, maxStops);

    // Sorting

    if (sortByInput.value === "price") {

        result = sortByPrice(result);

    } else if (sortByInput.value === "departure") {

        result = sortByDeparture(result);

    }

    resultTitle.textContent = "Available Flights";

    displayFlights(result);
}


// Search button

searchBtn.addEventListener("click", searchFlights);


// Reset button

resetBtn.addEventListener("click", () => {

    maxPriceInput.value = 10000;
    maxStopsInput.value = 2;
    sortByInput.value = "default";

    resultTitle.textContent = "Available Flights";

    displayFlights(flights);
});


// Cheapest flight button

cheapestBtn.addEventListener("click", () => {

    const result = cheapestPerAirline(flights);

    resultTitle.textContent = "Cheapest Flight Per Airline";

    displayFlights(result);
});


// Initial display

displayFlights(flights);


// Console test cases

console.log("All Flights:", flights);

console.log("Flights under 5000:",
    filterByMaxPrice(flights, 5000));

console.log("Direct Flights:",
    filterByStops(flights, 0));

console.log("Sorted by Price:",
    sortByPrice(flights));

console.log("Sorted by Departure:",
    sortByDeparture(flights));

console.log("Cheapest Per Airline:",
    cheapestPerAirline(flights));
