const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".nav_links");
const overlay = document.querySelector(".overlay");
const mainThumbnail = document.querySelector(".main-thumbnail");
const mainThumbnailLightBox = document.querySelector(
  ".lightbox-container .main-thumbnail"
);
const images = document.querySelectorAll(".preview img");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const amount = document.querySelector(".amount");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const slider = document.querySelector(".mobile-thumb");
const thumbMob = document.querySelector(".thumb-mob");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart-wrp");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const addBtn = document.querySelector(".add_btn");
const indicator = document.querySelector(".indicator");
const wrp = document.querySelector(".cart-content");

let amountValue = 0;
let currentImg = 1;

indicator.style.display = "none";

function openMenu() {
  menu.classList.add("active");
  overlay.classList.add("active");
}

function closeMenu() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
}

function handlePlus() {
  amountValue++;
  amount.innerText = amountValue;
}

function handleMinus() {
  if (amountValue > 0) {
    amountValue--;
  }
  amount.innerText = amountValue;
}

function nextImage() {
  if (currentImg === 4) {
    currentImg = 1;
  } else {
    currentImg++;
  }
  thumbMob.src = `./images/image-product-${currentImg}.jpg`;
}

function prevImage() {
  if (currentImg === 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }
  thumbMob.src = `./images/image-product-${currentImg}.jpg`;
}

function toggleCart() {
  cart.classList.toggle("invisible");
}

function closeLightBox() {
  lightbox.classList.add("invisible");
}

function openLightBox() {
  lightbox.classList.remove("invisible");
}

function addItem() {
  if (amountValue > 0) {
    const total = 125.0 * amountValue;
    wrp.classList.remove("empty");
    const product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = `
      <div>
        <img class="product-img" src="./images/image-product-${currentImg}.jpg">
        <div class="product-info">
          <p class="product-title">Fall Limited Edition Sneakers</p>
          <p>
            <span>$125.00</span>
            <span class="number">${amountValue}</span>
            <br>Total: $${total}</br>
          </p>
        </div>
        <button class="delete-btn" onclick="deleteItem()">
          <img src="./images/icon-delete.svg"></img>
        </button>
      </div>
      <button class="checkout-btn">Checkout</button>
    `;
    wrp.appendChild(product);
    indicator.style.display = "block";
    indicator.innerText = amountValue;
  }
}

function deleteItem() {
  wrp.innerHTML = "<p>Your cart is empty</p>";
  wrp.classList.add("empty");
  indicator.style.display = "none";
}

images.forEach((image) => {
  image.addEventListener("click", () => {
    const lastImg = document.querySelectorAll(".selected");
    if (lastImg.length > 0) {
      lastImg[0].classList.remove("selected");
    }
    image.classList.add("selected");

    const selectedImg = document.querySelector(".selected");
    switch (selectedImg.getAttribute("src")) {
      case "./images/image-product-1-thumbnail.jpg":
        currentImg = 1;
        break;
      case "./images/image-product-2-thumbnail.jpg":
        currentImg = 2;
        break;
      case "./images/image-product-3-thumbnail.jpg":
        currentImg = 3;
        break;
      case "./images/image-product-4-thumbnail.jpg":
        currentImg = 4;
        break;
    }
    mainThumbnail.src = `./images/image-product-${currentImg}.jpg`;
    mainThumbnailLightBox.src = `./images/image-product-${currentImg}.jpg`;
  });
});

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
cartBtn.addEventListener("click", toggleCart);
closeLightboxBtn.addEventListener("click", closeLightBox);
mainThumbnail.addEventListener("click", openLightBox);
addBtn.addEventListener("click", addItem);
