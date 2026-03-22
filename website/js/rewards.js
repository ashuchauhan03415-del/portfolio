// SCROLL ANIMATION

const steps = document.querySelectorAll(".step, .benefit");

window.addEventListener("scroll", () => {

steps.forEach(item => {

const top = item.getBoundingClientRect().top;
const screen = window.innerHeight;

if(top < screen - 100){

item.style.opacity = "1";
item.style.transform = "translateY(0)";

}

});

});


// JOIN BUTTON ALERT

const joinBtn = document.querySelector(".rewardsHero .btn");

joinBtn.addEventListener("click", function(){

alert("Welcome to Coffee Hut Rewards! ⭐");
});