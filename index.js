"use strict";

//NAVBAR
const container = document.querySelector(".container");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navList");
const navBar = document.querySelector(".navbar");
const navBtn = document.querySelector(".navBtn");
console.log(navList, navBtn, hamburger);

//HIDDEN FAQ ANSWERS
const faq1 = document.querySelector(".faq-answer-1");
const faq2 = document.querySelector(".faq-answer-2");
const faq3 = document.querySelector(".faq-answer-3");
const faq4 = document.querySelector(".faq-answer-4");

//FAQ HEADINGS
const question1 = document.querySelector(".question-heading-1");
const question2 = document.querySelector(".question-heading-2");
const question3 = document.querySelector(".question-heading-3");
const question4 = document.querySelector(".question-heading-4");

//FAQ ARROWS
const arrow1 = document.querySelector(".arrow-1");
const arrow2 = document.querySelector(".arrow-2");
const arrow3 = document.querySelector(".arrow-3");
const arrow4 = document.querySelector(".arrow-4");

//EMAIL
const emailInput = document.querySelector(".input-email");
const emailBtn = document.querySelector(".btn-contact-us");
const errorMessage = document.querySelector(".email-error");

console.log(navList.classList);

//CODE
//MOBILE NAVIGATION MENU
hamburger.addEventListener("click", function () {
  console.log("clicked");
  navBar.classList.toggle("open");
  container.classList.toggle("hidden");
});

//resize event to return all classes to normal upon a change in screen size
window.addEventListener("resize", function () {
  navBar.classList.remove("open");
});

//VIEWING HIDDEN FAQs
question1.addEventListener("click", function () {
  faq1.classList.toggle("hidden");
  //arrow1.src='images/'
});
question2.addEventListener("click", function () {
  faq2.classList.toggle("hidden");
});
question3.addEventListener("click", function () {
  faq3.classList.toggle("hidden");
});
question4.addEventListener("click", function () {
  faq4.classList.toggle("hidden");
});

//EMAIL CHECKER
emailBtn.addEventListener("click", function () {
  if (emailInput.value.includes("@") && emailInput.value.includes(".com")) {
    console.log("success");
    emailInput.value = "";
    errorMessage.classList.add("hidden");
  } else {
    errorMessage.classList.remove("hidden");
  }
});
