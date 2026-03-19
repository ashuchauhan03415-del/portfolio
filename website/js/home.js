// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", function(){

let navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.style.background = "#000";
}else{
navbar.style.background = "#111";
}

});




// HERO BUTTON ANIMATION

const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", function(){
btn.style.transform = "scale(1.05)";
});

btn.addEventListener("mouseout", function(){
btn.style.transform = "scale(1)";
});


// DARK MODE

function toggleTheme(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

}

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(item=>{

const top = item.getBoundingClientRect().top;
const screen = window.innerHeight;

if(top < screen-100){
item.classList.add("active");
}

});

});

if(!localStorage.getitem("username")){
    window.location="login.html"
}

function logout(){

localStorage.removeItem("loggedIn")

window.location="login.html"

}