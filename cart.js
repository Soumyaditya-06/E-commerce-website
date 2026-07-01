/*=========================================
 NeoMart Cart
=========================================*/

const cartItems = document.getElementById("cartItems");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");
const emptyCart = document.getElementById("emptyCart");
const cartSection = document.querySelector(".cart-section");

/*=========================
Load Cart
=========================*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/*=========================
Display Cart
=========================*/

function displayCart() {
     cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartSection.style.display = "none";
        emptyCart.style.display = "block";
        return;
    }

    cartSection.style.display = "grid";
    emptyCart.style.display = "none";

    let grandTotal = 0;

    cart.forEach((product, index) => {

        grandTotal += product.price * product.quantity;

        cartItems.innerHTML += `

        <div class="cart-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="cart-details">

                <h3>${product.name}</h3>

                <p class="cart-price">₹${product.price}</p>

                <div class="quantity">

                    <button onclick="decreaseQty(${index})">-</button>

                    <span>${product.quantity}</span>

                    <button onclick="increaseQty(${index})">+</button>

                </div>

                <button class="remove-btn"
                    onclick="removeItem(${index})">

                    Remove

                </button>

            </div>

        </div>

        `;

    });

    subtotal.innerHTML = "₹" + grandTotal;
    total.innerHTML = "₹" + grandTotal;

}

/*=========================
Increase Quantity
=========================*/

function increaseQty(index){

    cart[index].quantity++;

    saveCart();

}

/*=========================
Decrease Quantity
=========================*/

function decreaseQty(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    saveCart();

}

/*=========================
Remove Product
=========================*/

function removeItem(index){

    cart.splice(index,1);

    saveCart();

}

/*=========================
Save Cart
=========================*/

function saveCart(){

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}

/*=========================
Checkout
=========================*/

const checkoutBtn = document.getElementById("checkoutBtn");

if(checkoutBtn){

    checkoutBtn.addEventListener("click",()=>{

        if(cart.length===0){

            alert("Your cart is empty.");

            return;

        }

        alert("Order Placed Successfully!");

        localStorage.removeItem("cart");

        cart=[];

        displayCart();

    });

}

/*=========================
Start
=========================*/

displayCart();