
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const retry = document.getElementById("retry");
const empty = document.getElementById("empty");

const destinationList = document.getElementById(
    "destination-list"
);

async function loadDestinations() {

    loading.hidden = false;
    error.hidden = true;
    retry.hidden = true;
    empty.hidden = true;

    destinationList.replaceChildren();

    try {

        const response = await fetch("destinations.json");

        // Check API response
        if (!response.ok) {
            throw new Error("Failed to fetch destinations");
        }

        // Convert response into JSON
        const destinations = await response.json();

        loading.hidden = true;

        // Check empty data
        if (!Array.isArray(destinations) ||
            destinations.length === 0) {

            empty.hidden = false;
            return;
        }

        // Create destination cards
        destinations.forEach(destination => {

            const card = document.createElement("div");
            card.className = "destination-card";

            const image = document.createElement("img");
            image.src = destination.image;
            image.alt = `View of ${destination.name}`;
            image.loading = "lazy";

            const title = document.createElement("h2");
            title.textContent = destination.name;

            const country = document.createElement("p");
            country.textContent = destination.country;

            const description = document.createElement("p");
            description.textContent = destination.description;

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(country);
            card.appendChild(description);

            destinationList.appendChild(card);
        });

    } catch (err) {

        loading.hidden = true;
        error.hidden = false;
        retry.hidden = false;

        console.error("Error:", err.message);
    }
}

// Retry button
retry.addEventListener("click", loadDestinations);

// Load data when page opens
loadDestinations();
