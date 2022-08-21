"use strict";
import { tns } from "tiny-slider";

//Slider **********************************************************

const navMenu = document.getElementById("navbar-default");
const navButton = document.getElementById("nav-button");

navButton.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

//Slider **********************************************************

const slider = tns({
  container: ".my-slider",
  controls: false,
  items: 1,
  mouseDrag: true,
  slideBy: "page",
  swipeAngle: false,
  speed: 400,
  nav: true,
  navContainer: ".dotes-container",
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayHoverPause: true,
});

slider.getInfo();

document.querySelector(".dotes-container").onclick = function () {
  // get slider info
  const info = slider.getInfo(),
    indexPrev = info.indexCached,
    indexCurrent = info.index;

  // update style based on index
  info.slideItems[indexPrev].classList.remove("active");
  info.slideItems[indexCurrent].classList.add("active");
};

//Fade in animations*****************************************************************************

const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: "0px",
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

window.addEventListener("DOMContentLoaded", (event) => {
  const fades = Array.from(document.getElementsByClassName("fade"));

  for (let fade of fades) {
    fadeObserver.observe(fade);
  }
});

const fades = Array.from(document.getElementsByClassName("fade"));
for (let fade of fades) {
  const fadeups = fade.getElementsByClassName("fade-delay");
  for (let count = 0; count < fadeups.length; count++) {
    fadeups[count].setAttribute(
      "style",
      "transition-delay: " + count * 0.5 + "s"
    );
  }
  fadeObserver.observe(fade);
}

//History section counter ************************************************

function animate(obj, initVal, lastVal, duration) {
  let startTime = null;

  //get the current timestamp and assign it to the currentTime variable
  let currentTime = Date.now();

  //pass the current timestamp to the step function
  const step = (currentTime) => {
    //if the start time is null, assign the current time to startTime
    if (!startTime) {
      startTime = currentTime;
    }

    //calculate the value to be used in calculating the number to be displayed
    const progress = Math.min((currentTime - startTime) / duration, 1);

    //calculate what to be displayed using the value gotten above
    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

    //checking to make sure the counter does not exceed the last value (lastVal)
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };
  //start animating
  window.requestAnimationFrame(step);
}
const text1 = document.getElementById("num-demenage");
const text2 = document.getElementById("num-transp");

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animate(text1, 0, 325, 2000);
      animate(text2, 0, 412, 2000);
      countObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

window.addEventListener("DOMContentLoaded", (event) => {
  countObserver.observe(text1);
  countObserver.observe(text2);
});

//Main modal handling*******************************************************************
const mainModal = document.getElementById("main-modal");
const overlay = document.getElementById("overlay");

const toggleModal = (modal, overlay) => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

const modalTogglers = document.querySelectorAll(".modal-toggle");

modalTogglers.forEach((toggler) =>
  toggler.addEventListener("click", toggleModal.bind(null, mainModal, overlay))
);

//Handling landing page form*******************************************************************

const devisBtn = document.getElementById("devis-btn");

devisBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const startInput = document.getElementById("start-input");
  const endInput = document.getElementById("end-input");
  const startInputModal = document.getElementById("start-input-modal");
  const endInputModal = document.getElementById("end-input-modal");

  toggleModal(mainModal, overlay);
  startInputModal.value = startInput.value;
  endInputModal.value = endInput.value;
});

// Adress autocomplete *******************************

async function getAdress(query, limit = 3) {
  try {
    const res = await fetch(
      `https://api-adresse.data.gouv.fr/search/?q=${query
        .trim()
        .replace(" ", "+")}&limit=3`
    );
    const data = await res.json();
    data.features.forEach((entry) => console.log(entry.properties.label));
  } catch (err) {
    console.error(err);
  }
}

const inputStart = document.getElementById("start-input");

inputStart.addEventListener("input", async () => {
  try {
    await getAdress(inputStart.value);
  } catch (err) {
    console.error(err);
  }
});

// Form sending *********************************

document.getElementById("main-modal-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const mainModal = document.getElementById("main-modal");

  const inpObj = {};

  Array.from(
    mainModal.querySelectorAll("input ,select"),
    (input) => (inpObj[input.name] = input.value)
  );

  //
  fetch("https://submit-form.com/L6ISlz89", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(inpObj),
  })
    .then((res) => {
      console.log(res);
      toggleForm();
      toggleSuccess();
    })
    .catch((err) => {
      console.error(err);
      toggleForm();
      toggleErr();
    });
});

function toggleForm() {
  const modalForm = document.getElementById("main-modal").querySelector("form");
  modalForm.classList.toggle("hidden");
}

function toggleSuccess() {
  const success = document
    .getElementById("main-modal")
    .querySelector(".success");
  success.classList.toggle("hidden");
}
