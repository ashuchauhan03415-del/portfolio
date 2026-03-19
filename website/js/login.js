let otp=""

function signup(){

let user=document.getElementById("newUser").value
let pass=document.getElementById("newPass").value

localStorage.setItem("username",user)
localStorage.setItem("password",pass)

alert("Account Created Successfully")

showLogin()

}

function login(){

let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

let savedUser=localStorage.getItem("username")
let savedPass=localStorage.getItem("password")

if(user===savedUser && pass===savedPass){

localStorage.setItem("loggedIn","true")

window.location="home.html"

}else{

alert("Wrong username or password")

}

}

function showSignup(){

toggle("signupBox")

}

function showLogin(){

toggle(null)

}

function showForgot(){

otp=Math.floor(1000+Math.random()*9000)

alert("Your OTP: "+otp)

toggle("otpBox")

}

function verifyOTP(){

let userOTP=document.getElementById("otpInput").value

if(userOTP==otp){

alert("OTP Verified")

toggle("resetBox")

}else{

alert("Wrong OTP")

}

}

function resetPassword(){

let newPass=document.getElementById("resetPass").value

localStorage.setItem("password",newPass)

alert("Password Updated Successfully")

showLogin()

}

function toggle(id){

document.querySelectorAll(".card").forEach(c=>c.classList.add("hidden"))

if(id){

document.getElementById(id).classList.remove("hidden")

}else{

document.querySelector(".card").classList.remove("hidden")

}

}

