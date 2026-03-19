const products = [

{name:"Espresso",price:120,category:"coffee",rating:4,img:"assests/images/espresso1.jpg"},
{name:"Latte",price:180,category:"coffee",rating:5,img:"assests/images/Iced Latte1.jpg"},
{name:"Cappuccino",price:200,category:"coffee",rating:4,img:"assests/images/cappuccino1.jpg"},
{name:"Americano",price:150,category:"coffee",rating:4,img:"assests/images/americano.jpg"},
{name:"Mocha",price:220,category:"coffee",rating:5,img:"assests/images/mocha.jpg"},

{name:"Chocolate Cake",price:180,category:"cake",rating:5,img:"assests/images/chocolate cake1.jpg"},
{name:"Red Velvet",price:220,category:"cake",rating:4,img:"assests/images/red velvet1.jpg"},
{name:"Cheese Cake",price:200,category:"cake",rating:4,img:"assests/images/cheese cake1.jpg"},

{name:"Cold Coffee",price:160,category:"drink",rating:4,img:"assests/images/cold coffee1.jpg"},
{name:"Iced Latte",price:190,category:"drink",rating:5,img:"assests/images/iced latte1.jpg"},
{name:"Caramel Frappuccino",price:230,category:"drink",rating:5,img:"assests/images/caramel frappuccino1.jpg"},

{name:"Veg Sandwich",price:140,category:"sandwich",rating:4,img:"assests/images/veg sandwich.jpg"},
{name:"Cheese Sandwich",price:170,category:"sandwich",rating:4,img:"assests/images/cheese sandwich.jpg"},
{name:"Grilled Sandwich",price:190,category:"sandwich",rating:5,img:"assests/images/grilled sandwich.jpg"},
{name:"Paneer Sandwich",price:210,category:"sandwich",rating:5,img:"assests/images/paneer sandwich.jpg"}

];


const grid = document.getElementById("menuGrid");
const search = document.getElementById("search");
const cartCount = document.getElementById("cartCount");

let cart = [];


function displayProducts(items){

grid.innerHTML="";

items.forEach(p=>{

let stars = "★".repeat(p.rating) + "☆".repeat(5-p.rating);

let card = document.createElement("div");

card.classList.add("productCard");

card.innerHTML = `

<img src="${p.img}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<div class="rating">${stars}</div>

<button class="addBtn">Add to Cart</button>

`;

card.querySelector(".addBtn").onclick = () => {

cart.push(p);

cartCount.innerText = cart.length;

};

grid.appendChild(card);

});

}


displayProducts(products);


// SEARCH

search.addEventListener("keyup",()=>{

let value = search.value.toLowerCase();

let filtered = products.filter(p =>
p.name.toLowerCase().includes(value)
);

displayProducts(filtered);

});


// FILTER

document.querySelectorAll(".filters button").forEach(btn=>{

btn.onclick = () => {

let category = btn.dataset.filter;

if(category === "all"){

displayProducts(products);

}else{

let filtered = products.filter(p =>
p.category === category
);

displayProducts(filtered);

}

};

});