const productsDiv = document.getElementById("products");
const cartItemsDiv = document.querySelector(".cartItems");
const totalDiv = document.querySelector(".total");

let cart = {};

//=====FETCH PRODUCTS=====

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {

data.forEach(product => {

const card = document.createElement("div");
card.classList.add("card");

card.dataset.name = product.title;
card.dataset.price = product.price;

card.innerHTML = `
<img src="${product.image}">
<h3>${product.title}</h3>
<p>₹${product.price}</p>
<button class="addBtn">Add To Cart</button>
`;

productsDiv.appendChild(card);

});

});

//====ADD TO CART=====

productsDiv.addEventListener("click", function(e){

if(e.target.classList.contains("addBtn")){

const card = e.target.closest(".card");

const name = card.dataset.name;
const price = parseFloat(card.dataset.price);
const img = card.querySelector("img").src;

if(cart[name]){
cart[name].qty += 1;
}else{
cart[name] = {
price: price,
qty: 1,
img: img
};
}

updateCart();
}

});

// ================= UPDATE CART =================

function updateCart(){

cartItemsDiv.innerHTML="";
let subtotal = 0;

Object.keys(cart).forEach(item=>{

subtotal += cart[item].price * cart[item].qty;

const cartItem = document.createElement("div");
cartItem.classList.add("cartItem");

cartItem.innerHTML = `
<div>
<img src="${cart[item].img}" width="40">
${item}
</div>

<div class="qty">
<button class="minus" data-item="${item}">-</button>
<span>${cart[item].qty}</span>
<button class="plus" data-item="${item}">+</button>
</div>
`;

cartItemsDiv.appendChild(cartItem);

});

totalDiv.innerText = "Subtotal: ₹" + subtotal;

}

// ================= QUANTITY =================

cartItemsDiv.addEventListener("click", function(e){

const item = e.target.dataset.item;

if(e.target.classList.contains("plus")){
cart[item].qty += 1;
}

if(e.target.classList.contains("minus")){
cart[item].qty -= 1;

if(cart[item].qty <= 0){
delete cart[item];
}
}

updateCart();
});