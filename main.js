/*========================================
 NeoMart Main JavaScript
========================================*/

console.log("NeoMart Loaded Successfully!");

/*========================================
 Category Card Click Effect
========================================*/

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(0.97)";

        setTimeout(() => {

            card.style.transform = "";

        }, 150);

    });

});

/*========================================
 Future Functions
========================================*/

// Search Function
// Wishlist Function
// Shopping Cart
// Product Filter
// Product Details

// Sob pore add kora hobe.