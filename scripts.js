const container = document.getElementById("container");

const container_1 = document.getElementById("container_1");
const registerBtn_1 = document.getElementById("register_1");
const loginBtn_1 = document.getElementById("login_1");

registerBtn_1.addEventListener("click", () => {
  container_1.classList.add("active");
});
loginBtn_1.addEventListener("click", () => {
  container_1.classList.remove("active");
});

function toggleVisibility(target) {
  const logoContainer = document.querySelector(".logo-container");
  const subscribers = document.querySelector(".subscribers");

  if (target === "logo-container") {
    logoContainer.classList.add("show-flex");
    logoContainer.classList.remove("hide");
    subscribers.classList.remove("show-flex");
    subscribers.classList.add("hide");
  } else if (target === "subscribers") {
    subscribers.classList.add("show-flex");
    subscribers.classList.remove("hide");
    logoContainer.classList.remove("show-flex");
    logoContainer.classList.add("hide");
  }
}

document
  .querySelector(".swiches__button-1")
  .addEventListener("click", function () {
    toggleVisibility("logo-container");
  });

document
  .querySelector(".swiches__button-2")
  .addEventListener("click", function () {
    toggleVisibility("subscribers");
  });

document.addEventListener("DOMContentLoaded", function () {
  const circleButtons = document.querySelectorAll(".circle-button");
  const overlays = document.querySelectorAll(".overlay");

  function openOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
      overlay.style.display = "flex";
    } else {
      console.error(`Overlay with ID ${overlayId} not found.`);
    }
  }

  function closeOverlay() {
    overlays.forEach((overlay) => {
      overlay.style.display = "none";
    });
  }

  circleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const overlayId = this.getAttribute("data-overlay");
      openOverlay(overlayId);
    });
  });

  overlays.forEach((overlay) => {
    const closeButton = overlay.querySelector(".close-button");
    if (closeButton) {
      closeButton.addEventListener("click", closeOverlay);
    } else {
      console.error(`Close button not found in overlay with ID ${overlay.id}`);
    }
  });
});

function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = img.src;

  modalImage.onclick = function (event) {
    event.stopPropagation();
  };
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function closeFormModal() {
  const modal = document.getElementById("formModal");
  modal.style.display = "none";
}

function openForm() {
  const modal = document.getElementById("formModal");
  modal.style.display = "block";
}

function closeForm() {
  const modal = document.getElementById("formModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("formModal");
  if (event.target == modal) {
    closeForm();
  }
};

function toggleVisibility(target) {
  const logoContainer = document.querySelector(".logo-container");
  const subscribers = document.querySelector(".subscribers");
  const swiches__left = document.querySelector(".swiches__left");
  const swiches__right = document.querySelector(".swiches__right");
  const swiches__button_1 = document.querySelector(".swiches__button-1");
  const swiches__button_2 = document.querySelector(".swiches__button-2");

  if (target === "logo-container") {
    logoContainer.classList.add("show");
    logoContainer.classList.remove("hide");
    subscribers.classList.remove("show-flex");
    subscribers.classList.add("hide");
    swiches__left.classList.remove("button-white");
    swiches__right.classList.remove("button-blue");
    swiches__button_1.classList.remove("button-white");
    swiches__button_2.classList.remove("button-blue");
  } else if (target === "subscribers") {
    subscribers.classList.add("show-flex");
    subscribers.classList.remove("hide");
    logoContainer.classList.remove("show");
    logoContainer.classList.add("hide");
    swiches__left.classList.add("button-white");
    swiches__right.classList.add("button-blue");
    swiches__button_1.classList.add("button-white");
    swiches__button_2.classList.add("button-blue");
  }
}

document.addEventListener("DOMContentLoaded", toggleVisibility);

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x_1 = document.getElementsByClassName("overlay__img");
  if (n > x_1.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x_1.length;
  }
  for (i = 0; i < x_1.length; i++) {
    x_1[i].style.display = "none";
  }
  x_1[slideIndex - 1].style.display = "block";
  var x_2 = document.getElementsByClassName("overlay__img-2");
  if (n > x_2.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x_2.length;
  }
  for (i = 0; i < x_2.length; i++) {
    x_2[i].style.display = "none";
  }
  x_2[slideIndex - 1].style.display = "block";
  var x_3 = document.getElementsByClassName("overlay__img-3");
  if (n > x_3.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x_3.length;
  }
  for (i = 0; i < x_3.length; i++) {
    x_3[i].style.display = "none";
  }
  x_3[slideIndex - 1].style.display = "block";
  var x_4 = document.getElementsByClassName("overlay__img-4");
  if (n > x_4.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x_4.length;
  }
  for (i = 0; i < x_4.length; i++) {
    x_4[i].style.display = "none";
  }
  x_4[slideIndex - 1].style.display = "block";
  var x_5 = document.getElementsByClassName("overlay__img-5");
  if (n > x_5.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x_5.length;
  }
  for (i = 0; i < x_5.length; i++) {
    x_5[i].style.display = "none";
  }
  x_5[slideIndex - 1].style.display = "block";
  var x_6 = document.getElementsByClassName("overlay__img-6");
  if (n > x_6.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x_6.length;
  }
  for (i = 0; i < x_6.length; i++) {
    x_6[i].style.display = "none";
  }
  x_6[slideIndex - 1].style.display = "block";
  var x_7 = document.getElementsByClassName("overlay__img-7");
  if (n > x_7.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x_7.length;
  }
  for (i = 0; i < x_7.length; i++) {
    x_7[i].style.display = "none";
  }
  x_7[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  function centerElementInContainer(containerSelector, elementIndex) {
    const scrollContainer = document.querySelector(containerSelector);
    const elements = scrollContainer.children;

    if (elements.length > elementIndex) {
      const targetElement = elements[elementIndex];
      const containerWidth = scrollContainer.clientWidth;
      const elementWidth = targetElement.clientWidth;
      const scrollPosition =
        targetElement.offsetLeft - containerWidth / 2 + elementWidth / 2;

      scrollContainer.scrollLeft = scrollPosition;
    }
  }

  function scrollToCenter(containerSelector) {
    const scrollContainer = document.querySelector(containerSelector);
    const scrollPosition =
      (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
    scrollContainer.scrollLeft = scrollPosition;
  }

  if (window.innerWidth < 990) {
    centerElementInContainer(".video-reviews", 1);
    centerElementInContainer(".reviews-text", 1);
  } else {
    scrollToCenter(".video-reviews");
    scrollToCenter(".reviews-text");
  }
});
