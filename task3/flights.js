
export const flights = [

    { id: 1, airline: "IndiGo", from: "Hyderabad", to: "Delhi", departure: "06:00", price: 4500, stops: 0 },
    { id: 2, airline: "Air India", from: "Hyderabad", to: "Mumbai", departure: "08:00", price: 6500, stops: 1 },
    { id: 3, airline: "SpiceJet", from: "Bangalore", to: "Delhi", departure: "09:30", price: 3800, stops: 0 },
    { id: 4, airline: "IndiGo", from: "Chennai", to: "Mumbai", departure: "11:00", price: 5200, stops: 1 },
    { id: 5, airline: "Vistara", from: "Delhi", to: "Bangalore", departure: "07:30", price: 8000, stops: 0 },
    { id: 6, airline: "Air India", from: "Mumbai", to: "Chennai", departure: "13:00", price: 5500, stops: 0 },
    { id: 7, airline: "SpiceJet", from: "Hyderabad", to: "Goa", departure: "15:00", price: 4200, stops: 1 },
    { id: 8, airline: "IndiGo", from: "Delhi", to: "Kolkata", departure: "10:00", price: 4800, stops: 0 },
    { id: 9, airline: "Vistara", from: "Bangalore", to: "Mumbai", departure: "16:30", price: 7200, stops: 1 },
    { id: 10, airline: "Air India", from: "Chennai", to: "Delhi", departure: "18:00", price: 6000, stops: 0 },
    { id: 11, airline: "SpiceJet", from: "Mumbai", to: "Goa", departure: "12:30", price: 3500, stops: 0 },
    { id: 12, airline: "IndiGo", from: "Hyderabad", to: "Bangalore", departure: "14:00", price: 3000, stops: 0 },
    { id: 13, airline: "Vistara", from: "Delhi", to: "Chennai", departure: "20:00", price: 9000, stops: 1 },
    { id: 14, airline: "Air India", from: "Bangalore", to: "Kolkata", departure: "05:30", price: 7500, stops: 1 },
    { id: 15, airline: "SpiceJet", from: "Chennai", to: "Hyderabad", departure: "17:00", price: 4000, stops: 0 }

];


// Filter by maximum price

export function filterByMaxPrice(flights, maxPrice) {
    return flights.filter(flight => flight.price <= maxPrice);
}


// Filter by maximum stops

export function filterByStops(flights, maxStops) {
    return flights.filter(flight => flight.stops <= maxStops);
}


// Sort by price

export function sortByPrice(flights) {
    return [...flights].sort((a, b) => a.price - b.price);
}


// Sort by departure

export function sortByDeparture(flights) {
    return [...flights].sort((a, b) =>
        a.departure.localeCompare(b.departure)
    );
}


// Cheapest flight per airline

export function cheapestPerAirline(flights) {

    const result = {};

    flights.forEach(flight => {

        const airline = flight.airline;

        if (!result[airline] || flight.price < result[airline].price) {
            result[airline] = flight;
        }

    });

    return Object.values(result);
}

export const flights = [

    { id: 1, airline: "IndiGo", from: "Hyderabad", to: "Delhi", departure: "06:00", price: 4500, stops: 0 },
    { id: 2, airline: "Air India", from: "Hyderabad", to: "Mumbai", departure: "08:00", price: 6500, stops: 1 },
    { id: 3, airline: "SpiceJet", from: "Bangalore", to: "Delhi", departure: "09:30", price: 3800, stops: 0 },
    { id: 4, airline: "IndiGo", from: "Chennai", to: "Mumbai", departure: "11:00", price: 5200, stops: 1 },
    { id: 5, airline: "Vistara", from: "Delhi", to: "Bangalore", departure: "07:30", price: 8000, stops: 0 },
    { id: 6, airline: "Air India", from: "Mumbai", to: "Chennai", departure: "13:00", price: 5500, stops: 0 },
    { id: 7, airline: "SpiceJet", from: "Hyderabad", to: "Goa", departure: "15:00", price: 4200, stops: 1 },
    { id: 8, airline: "IndiGo", from: "Delhi", to: "Kolkata", departure: "10:00", price: 4800, stops: 0 },
    { id: 9, airline: "Vistara", from: "Bangalore", to: "Mumbai", departure: "16:30", price: 7200, stops: 1 },
    { id: 10, airline: "Air India", from: "Chennai", to: "Delhi", departure: "18:00", price: 6000, stops: 0 },
    { id: 11, airline: "SpiceJet", from: "Mumbai", to: "Goa", departure: "12:30", price: 3500, stops: 0 },
    { id: 12, airline: "IndiGo", from: "Hyderabad", to: "Bangalore", departure: "14:00", price: 3000, stops: 0 },
    { id: 13, airline: "Vistara", from: "Delhi", to: "Chennai", departure: "20:00", price: 9000, stops: 1 },
    { id: 14, airline: "Air India", from: "Bangalore", to: "Kolkata", departure: "05:30", price: 7500, stops: 1 },
    { id: 15, airline: "SpiceJet", from: "Chennai", to: "Hyderabad", departure: "17:00", price: 4000, stops: 0 }

];


// Filter by maximum price

export function filterByMaxPrice(flights, maxPrice) {
    return flights.filter(flight => flight.price <= maxPrice);
}


// Filter by maximum stops

export function filterByStops(flights, maxStops) {
    return flights.filter(flight => flight.stops <= maxStops);
}


// Sort by price

export function sortByPrice(flights) {
    return [...flights].sort((a, b) => a.price - b.price);
}


// Sort by departure

export function sortByDeparture(flights) {
    return [...flights].sort((a, b) =>
        a.departure.localeCompare(b.departure)
    );
}


// Cheapest flight per airline

export function cheapestPerAirline(flights) {

    const result = {};

    flights.forEach(flight => {

        const airline = flight.airline;

        if (!result[airline] || flight.price < result[airline].price) {
            result[airline] = flight;
        }

    });

    return Object.values(result);
}
