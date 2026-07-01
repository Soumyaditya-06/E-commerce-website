/*=========================================
 NeoMart Shop - Shoes Category
=========================================*/

const products = [

    {
        id: 1,
        name: "Nike Air Max",
        price: 2999,
        category: "shoes",
        image: "nike air max"
    },

    {
        id: 2,
        name: "Adidas Superstar",
        price: 3499,
        category: "shoes",
        image: "addidas superstar.jpg"
    },

    {
        id: 3,
        name: "Puma RS-X",
        price: 2799,
        category: "shoes",
        image: "puma RS-x.jpg"
    },
    {
        id: 4,
        name: "Reebok Classic",
        price: 2899,
        category: "shoes",
        image: "reebok classic.webp"
    },

    {
        id: 5,
        name: "Nike Revolution",
        price: 3199,
        category: "shoes",
        image: "nike revolution.webp"
    },

    {
        id: 6,
        name: "Adidas Ultraboost",
        price: 6999,
        category: "shoes",
        image: "ultraboost.webp"
    },

        // ================= WATCH =================

    {
        id:7,
        name:"Boat Ultima Prime",
        price:2599,
        category:"watch",
        image:"boat ultima.webp"
    },

    {
        id:8,
        name:"Casio G-Shock",
        price:7999,
        category:"watch",
        image:"casio.webp"
    },

    {
        id:9,
        name:"Titan Edge",
        price:5499,
        category:"watch",
        image:"titanedge.jpg"
    },

    {
        id:10,
        name:"GOBOLUT Pyro ",
        price:2499,
        category:"watch",
        image:"boult.jpg"
    },

    {
        id:11,
        name:"Fastrack Revoltt",
        price:3299,
        category:"watch",
        image:"revoltt.webp"
    },

    {
        id:12,
        name:"CMF Watch Pro 2",
        price:4999,
        category:"watch",
        image:"CMF.webp"
    },
        // ================= BAGS =================

    {
        id:19,
        name:"Wildcraft Backpack",
        price:2499,
        category:"bag",
        image:"wildcrFT.jpg"
    },

    {
        id:20,
        name:"Skybags Casual",
        price:1999,
        category:"bag",
        image:"casual.jpg"
    },

    {
        id:21,
        name:"American Tourister",
        price:3499,
        category:"bag",
        image:"american.jpg"
    },

    {
        id:22,
        name:"Provogue",
        price:2299,
        category:"bag",
        image:"provogue.webp"
    },

    {
        id:23,
        name:"Leather Backpack",
        price:2999,
        category:"bag",
        image:"leather.webp"
    },

    {
        id:24,
        name:"Aristrocrat",
        price:3999,
        category:"bag",
        image:"aris.jpg"
    }

];

const productContainer = document.getElementById("productContainer");
const categoryTitle = document.getElementById("categoryTitle");
const searchInput = document.getElementById("search");
const subcategoryContainer = document.getElementById("subcategoryContainer");

/*==========================
 Get Category
==========================*/

const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");

/*==========================
 Display Products
==========================*/

function displayProducts(list){

    productContainer.innerHTML = "";

    if(list.length === 0){

        productContainer.innerHTML = "<h2>No Products Found</h2>";

        return;

    }

    list.forEach(product => {

        productContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="product-price">₹${product.price}</p>

                <button onclick="addToCart(${product.id})">

                    Add To Cart

                </button>

            </div>

        </div>

        `;

    });

}

/*==========================
 Filter By Category
==========================*/

let filteredProducts = products;

if(selectedCategory){

    categoryTitle.innerHTML =
        selectedCategory.charAt(0).toUpperCase() +
        selectedCategory.slice(1) +
        " Collection";

    filteredProducts = products.filter(product =>
        product.category === selectedCategory
    );

}
// =========================
// Earphones Sub Categories
// =========================

if (selectedCategory === "earphones") {

    categoryTitle.innerHTML = "Choose Earphones Type";

    productContainer.innerHTML = "";

    subcategoryContainer.innerHTML = `

        <button class="sub-btn" onclick="showSubCategory('headphones')">
            Headphones
        </button>

        <button class="sub-btn" onclick="showSubCategory('tws')">
            TWS Earbuds
        </button>

        <button class="sub-btn" onclick="showSubCategory('neckband')">
            Neckbands
        </button>

    `;

}
else{

    displayProducts(filteredProducts);

}

/*==========================
 Search
==========================*/

if(searchInput){

searchInput.addEventListener("keyup", function(){

    const keyword = searchInput.value.toLowerCase();

    const result = filteredProducts.filter(product =>

        product.name.toLowerCase().includes(keyword)

    );

    displayProducts(result);

});

}
function showSubCategory(type){

    productContainer.style.display="grid";

    let products=[];

    if(type==="headphones"){

        products=[

            {
                name:"Sony WH-1000XM5",
                price:28999,
                image:"sony.jpg"
            },

            {
                name:"JBL Tune 770NC",
                price:7999,
                image:"jbl.jpg"
            },

            {
                name:"Boat Rockerz 550",
                price:1999,
                image:"boat.jpg"
            },
            {
                name:"realme TechLife Studio H1",
                price:3999,
                image:"realme.jpg"
            },


        ];

    }

    if(type==="tws"){

        products=[

            {
                name:"Apple AirPods Pro",
                price:23999,
                image:"apple.jpg"
            },

            {
                name:"Nothing Ear",
                price:9999,
                image:"cmf2.webp"
            },

            {
                name:"Realme Buds Air",
                price:3499,
                image:"realme2.jpg"
            },
             {
                name:"Oneplus Nord Buds 4 Pro",
                price:3999,
                image:"oneplus.webp"
            }

        ];

    }

    if(type==="neckband"){

        products=[

            {
                name:"OnePlus Bullets Z2",
                price:1999,
                image:"Z2.jpg"
            },

            {
                name:"Boat Rockerz 255",
                price:1499,
                image:"255.jpg"
            },

            {
                name:"Realme Wireless 3",
                price:2499,
                image:"3.webp"
            },
            {
                name:"CMF Neckband Pro",
                price:2099,
                image:"pro.webp"
            }


        ];

    }

    productContainer.innerHTML="";

    products.forEach(product=>{

        productContainer.innerHTML+=`

        <div class="product-card">

            <img src="${product.image}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="product-price">₹${product.price}</p>

                <button onclick="addSubProductToCart('${product.name}',${product.price},'${product.image}')">
    Add To Cart
</button>

            </div>

        </div>

        `;

    });

}

/*==========================
 Add To Cart
==========================*/

function addToCart(id){

    const product = products.find(item => item.id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === id);

    if(existingProduct){

        existingProduct.quantity++;

    }else{

        cart.push({

            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " Added To Cart Successfully!");

}
function addSubProductToCart(name, price, image){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.name === name);

    if(existingProduct){

        existingProduct.quantity++;

    }else{

        cart.push({

            id: Date.now(),

            name: name,

            price: price,

            image: image,

            quantity: 1

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " Added To Cart Successfully!");

}