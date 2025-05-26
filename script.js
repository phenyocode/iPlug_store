const products = [
    {
        Id: 1,
        name: "iPhone 15 Pro",
        price: 999,
        category: "phones",
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        Id: 2,
        name: "MacBook Air",
        price: 1199,
        category: "laptops",
        image: "https://media-cdn.bnn.in.th/94681/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Space-Grey-2020-1.jpg",
        description: "Lightweight laptop perfect for work and creativity"
    },
     {
        Id: 3,
        name: "AirPods Pro",
        price: 249,
        category: "accessories",
        image: "https://th.bing.com/th/id/OIP.134VJ44OStJo8DrF8-JnyAHaHa?w=170&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7",
        description: "wireless earbuds with noise cancellation"
    },
    {
        Id: 4,
        name: "Samsung Galaxy S24",
        price: 899,
        category: "phones",
        image: "https://th.bing.com/th/id/OIP.XWGPWrfFFQ0tTF3Xpxk_sQHaHa?w=185&h=185&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7",
        description: "Android phone with incredible features"
    },
    {
        Id: 5,
        name: "Dell Laptop",
        price: 799,
        category: "laptops",
        image: "https://th.bing.com/th/id/OIP.RQsOX9J87AgncXVFLbFi8wHaFH?w=278&h=192&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        Id: 6,
        name: "Wireless Mouse",
        price: 49,
        category: "accessories",
        image: "https://th.bing.com/th/id/OIP.AjULUjo-WjqTm4J4J-pYFAHaHa?w=172&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7",
        description: "Ergonomic mouse for productivity"
    },
];

// Step 2: Creating out shopping cart.
// This will store all items the customer wants to buy

let cart = [];

// Step 3: Get refrences to HTML elements
// This connects our JS to specific parts of our webpage

const cartCountElement = document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');

// Step 4: Utility function to format
// This will make a price look like "R999" instead of "999"
function formatPrice(price) {
    return 'R' + price.toFixed(2)
}

console.log('JavaScript Loaded successfully!');
console.log('We have', products.length, 'products.'); 

function createProductCard(product) {
    return `
        <div class="product-card"> 
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">
                        View Details
                    </button>
                </div>
            </div>
        </div> `
}

function displayProducts(productsToShow = products) {
    if (productsGrid) {
        console.log('Displaying products...on products page');
        const productsHTML = productsToShow.map(createProductCard).join('');
        productsGrid.innerHTML = productsHTML;
    } else {
        console.log('Not on products page, skipping display');
    }
}

function addToCart(productId) {
    alert('Product ${productId} added to cart!');
}

function viewProduct(productId) {
    const product
    = products.find(prod => prod.id === productId);
    alert('Product: ' + product.name + 
        '\nPrice: ' + formatPrice(product.price) + 
        '\nDescription: ' + product.description)
     }

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add acttice class to the clicked button
            this.classList.add('active');
            
            // Get the category from the buttons data-category attribute
            const category = this.getAttribute('data-category');

            // Filter products based on category
            let filteredProducts;
            if (category === 'all') {
                filteredProducts = products;
            } else {
                filteredProducts = products.filter(product => product.category === category);
            }
            displayProducts(filteredProducts);
            console.log('showing', filteredProducts.length, 'products in category:', category);
        });
    });
}

document.addEventListener('DOMContentLoaded', function (){
    console.log('Page loaded, displaying products...');
    displayProducts();
    setupFilters();
})


    