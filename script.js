const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.textContent="☀️";
localStorage.setItem("theme","dark");
}
else{
toggle.textContent="🌙";
localStorage.setItem("theme","light");
}

});


if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
toggle.textContent="☀️";
}


const certs=[
"images/database migration.png",
"images/Generative - Copy.jpeg",
"images/lab.png",
"images/SQLCERT1.png",
"Images/database migration.png"
];

let currentCert=0;

const modal=document.getElementById("certModal");
const certImg=document.getElementById("certImg");

function openCert(index){

currentCert=index;
modal.style.display="flex";
certImg.src=certs[currentCert];

}

function closeCert(){

modal.style.display="none";

}

function nextCert(){

currentCert=(currentCert+1)%certs.length;
certImg.src=certs[currentCert];

}

function prevCert(){

currentCert=(currentCert-1+certs.length)%certs.length;
certImg.src=certs[currentCert];

}

setInterval(()=>{

if(modal.style.display==="flex"){
nextCert();
}

},3000);

const text = ["Web Developer", "Frontend Developer", "JavaScript Developer"];


let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {

if (count === text.length) {
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if (letter.length === currentText.length) {

count++;
index = 0;

setTimeout(type, 1200);
}

else {
setTimeout(type, 120);
}
}
type();