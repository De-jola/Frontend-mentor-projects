let number = document.getElementById("number");
const cartCard = document.getElementById("cartCard");
const cartNumber = document.getElementById("cartNumber");
const trashDelete = document.getElementById("delete");
let cartSummary = document.getElementById("cartSummary");
const menu = document.getElementById("menu");
const heroImage = document.getElementById("product1");
let slides = document.querySelectorAll(".carousel-slide");
var currentIndex = 0;

let newNumber;

const plus = function () {
  newNumber = Number(number.innerText) + 1;

  number.textContent = newNumber;
  console.log(newNumber);
};
const minus = function () {
  newNumber = 0;
  Number(number.innerText) <= 0
    ? (number.textContent = newNumber)
    : (newNumber = Number(number.innerText) - 1);

  number.textContent = newNumber;
  console.log(newNumber);
};

const addToCart = function () {
  console.log(cartNumber.classList);

  if (newNumber > 0) {
    cartNumber.classList.remove("display");
    cartNumber.textContent = newNumber;
    cartSummary.innerHTML = `<div class="cart-summary">
    <div class="cart-img">
      <img id="cartImg" src="images/image-product-1-thumbnail.jpg" alt="">
    </div>
    <p>
      Fall Limited Edition Sneakers $125.00 x
      <span id="pieces">${parseFloat(newNumber)}</span> $
      <span class="bold" id="total">${newNumber * 125.0}</span>
    </p>
    <div onclick="displayCartSummary();" class="trash">
      <img id="delete" src="images/icon-delete.svg" alt="">
    </div>
  </div>
  <button class="button button-cart">Checkout</button>`;
  } else {
    cartNumber.classList.add("display");
  }
};

const displayCard = function () {
  const contain = cartCard.classList.contains("display");
  contain
    ? cartCard.classList.remove("display")
    : cartCard.classList.add("display");
  console.log(cartCard.classList.contains("display"));
};

const displayCartSummary = function () {
  console.log(cartSummary.innerHTML);
  cartSummary.innerHTML = "Your cart is empty";
  cartNumber.classList.add("display");
  console.log(cartSummary.innerHTML);
};

const displayMenu = function () {
  menu.style.left = "0px";
};
const hideMenu = function () {
  menu.style.left = "-250px";
};

const changeJpg = function (thumbnailId) {
  console.log(thumbnailId);
  console.log(heroImage.src);

  heroImage.src = `images/image-product-${thumbnailId}.jpg`;
};

document.addEventListener("DOMContentLoaded", function () {
  // Get all carousel slides
  var slides = document.querySelectorAll(".carousel-slide");

  // Set initial index
  var currentIndex = 0;

  // Display the first slide
  slides[currentIndex].style.display = "block";
});

function showNextSlide() {
  slides[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.display = "flex";
}
function showPrevSlide() {
  slides[currentIndex].style.display = "none";

  currentIndex = (currentIndex - 1 + slides.length) % slides.length;

  slides[currentIndex].style.display = "flex";
}
