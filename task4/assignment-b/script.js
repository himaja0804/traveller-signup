
const products = [
    {
        id: 1,
        name: "Paris",
        country: "France",
        price: 85000,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600"
    },
    {
        id: 2,
        name: "Bali",
        country: "Indonesia",
        price: 65000,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600"
    },
    {
        id: 3,
        name: "Tokyo",
        country: "Japan",
        price: 95000,
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600"
    },
    {
        id: 4,
        name: "Switzerland",
        country: "Switzerland",
        price: 120000,
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600"
    }
];

const STORAGE_KEY = "travelWishlist";

const productList = document.getElementById("product-list");
const wishlistCount = document.getElementById("wishlist-count");
const searchInput = document.getElementById("search");
const noResults = document.getElementById("no-results");

const form = document.getElementById("price-alert-form");
const formMessage = document.getElementById("form-message");

// Safely read wishlist from localStorage
function getWishlist() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);

        if (!savedData) {
            return [];
        }

        const parsedData = JSON.parse(savedData);

        if (!Array.isArray(parsedData)) {
            return [];
        }

        return parsedData.filter(id =>
            Number.isInteger(id) &&
            products.some(product => product.id === id)
        );

    } catch (error) {
        console.error("Invalid wishlist data:", error);
        return [];
    }
}

let wishlist = getWishlist();

// Save wishlist
function saveWishlist() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(wishlist)
        );
        return true;
    } catch (error) {
        console.error("Unable to save wishlist:", error);
        return false;
    }
}

// Update counter
function updateCounter() {
    wishlistCount.textContent = wishlist.length;
}

// Add or remove item
function toggleWishlist(id) {

    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
    } else {
        wishlist.push(id);
    }

    if (!saveWishlist()) {
        wishlist = getWishlist();
        alert("Unable to save wishlist. Check browser storage.");
    }

    renderProducts(searchInput.value);
    updateCounter();
}

// Create product cards
function renderProducts(searchTerm = "") {

    productList.replaceChildren();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(
            searchTerm.toLowerCase().trim()
        ) ||
        product.country.toLowerCase().includes(
            searchTerm.toLowerCase().trim()
        )
    );

    noResults.hidden = filteredProducts.length !== 0;

    filteredProducts.forEach(product => {

        const card = document.createElement("article");
        card.className = "product-card";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = `Travel destination: ${product.name}`;
        image.loading = "lazy";

        const heart = document.createElement("button");
        heart.type = "button";

        const isSaved = wishlist.includes(product.id);

        heart.className = isSaved
            ? "heart-button saved"
            : "heart-button";

        heart.textContent = isSaved ? "♥" : "♡";

        heart.setAttribute(
            "aria-label",
            isSaved
                ? `Remove ${product.name} from wishlist`
                : `Add ${product.name} to wishlist`
        );

        heart.setAttribute("aria-pressed", String(isSaved));

        heart.addEventListener("click", () => {
            toggleWishlist(product.id);
        });

        const info = document.createElement("div");
        info.className = "product-info";

        const title = document.createElement("h3");
        title.textContent = product.name;

        const country = document.createElement("p");
        country.textContent = product.country;

        const price = document.createElement("p");
        price.textContent = `Price: ₹${product.price.toLocaleString("en-IN")}`;

        info.appendChild(title);
        info.appendChild(country);
        info.appendChild(price);

        card.appendChild(image);
        card.appendChild(heart);
        card.appendChild(info);

        productList.appendChild(card);
    });

    updateCounter();
}

// Debounced search
let searchTimer;

searchInput.addEventListener("input", () => {

    clearTimeout(searchTimer);

    searchTimer = setTimeout(() => {
        renderProducts(searchInput.value);
    }, 300);
});

// Sync wishlist between tabs
window.addEventListener("storage", event => {

    if (event.key === STORAGE_KEY) {
        wishlist = getWishlist();
        renderProducts(searchInput.value);
    }
});

// Price alert form
form.addEventListener("submit", event => {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const targetPrice = Number(
        document.getElementById("target-price").value
    );

    if (!email || !Number.isFinite(targetPrice) || targetPrice <= 0) {
        formMessage.textContent = "Please enter valid details.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent =
        `Price alert details saved for ${email} at ₹${targetPrice.toLocaleString("en-IN")}.`;

    formMessage.style.color = "green";

    form.reset();
});

// Initial display
renderProducts();
