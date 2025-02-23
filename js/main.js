// Product data
const products = [
    {
        id: 1,
        title: "THE CUBE",
        price: "2950 EUR",
        details: {
            id: "#001",
            material: "PINE CANADIAN ELLIPITIS",
            treatment: "ACID COAT TREATMENT",
            colors: "GREEN BLUE RED",
            production: "PRODUCED AT XYZ LABS",
            edition: "LIMITED EDITION OF 15"
        },
        image: "images/product4.jpg"
    }
];

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeCart();
});

function initializeCart() {
    const addToCartBtn = document.querySelector('.add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            // TODO: Implement add to cart functionality
            console.log('Product added to cart');
        });
    }

    // Cart overlay functionality
    const cartTrigger = document.querySelector('.cart-trigger');
    const cartOverlay = document.querySelector('.cart-overlay');

    if (cartTrigger && cartOverlay) {
        cartTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            cartOverlay.classList.toggle('active');
        });
    }
}
