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
  toggler.addEventListener("click", () => {
    toggleModal(mainModal, overlay);
    initModal();
  })
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

import autoComplete from "@tarekraafat/autocomplete.js";

const config = {
  data: {
    src: async (query) => {
      try {
        const res = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${query
            .trim()
            .replace(" ", "+")}&limit=10`
        );
        const data = await res.json();
        const addressArr = [];
        data.features.forEach((entry) =>
          addressArr.push(entry.properties.label)
        );
        return addressArr;
      } catch (error) {
        return error;
      }
    },
    cache: false,
  },
  searchEngine: "loose",
  resultsList: {
    element: (list, data) => {
      if (!data.results.length) {
        // Create "No Results" message element
        const message = document.createElement("div");
        // Add class to the created element
        message.setAttribute("class", "no_result");
        // Add message text content
        message.innerHTML = `<span>Aucun Results trouvés pour "${data.query}"</span>`;
        // Append message element to the results list
        list.prepend(message);
      }
    },
    noResults: true,
  },
  threshold: 5,
  debounce: 300,
  resultItem: {
    highlight: true,
  },
};

const startInputAutoComplete = new autoComplete({
  ...config,
  selector: "#start-input",
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        startInputAutoComplete.input.value = selection;
      },
    },
  },
});

const endInputAutoComplete = new autoComplete({
  ...config,
  selector: "#end-input",
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        endInputAutoComplete.input.value = selection;
      },
    },
  },
});

const startInputAutoCompleteModal = new autoComplete({
  ...config,
  selector: "#start-input-modal",
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        startInputAutoCompleteModal.input.value = selection;
      },
    },
  },
});

const endInputAutoCompleteModal = new autoComplete({
  ...config,
  selector: "#end-input-modal",
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        endInputAutoCompleteModal.input.value = selection;
      },
    },
  },
});

// Form sending *********************************

//cheking validty
const tel = document.getElementById("tel");
const email = document.getElementById("email");

//show error message when invalid

tel.addEventListener("invalid", (e) => {
  e.preventDefault();
  tel.nextElementSibling?.remove();
  tel.classList.add("ring-red-600", "ring-1");
  tel.insertAdjacentHTML(
    "afterend",
    `<div class="invalid-err-txt | text-red-600 text-xs -mt-4">
  Doit contenir une série 10 chiffres, sans espaces, commençant par zero.
</div>`
  );
});

email.addEventListener("invalid", (e) => {
  e.preventDefault();
  email.nextElementSibling?.remove();
  email.classList.add("ring-red-600", "ring-1");
  email.insertAdjacentHTML(
    "afterend",
    `<div class="invalid-err-txt | text-red-600 text-xs -mt-4 mb-4">
  Veuillez entrer une adresse email valide.
</div>`
  );
});

//reinitialize the inputs on focus
email.addEventListener("focus", (e) => {
  e.preventDefault();
  email.classList.remove("ring-red-600", "ring-1");
  email.nextElementSibling?.remove();
});

tel.addEventListener("focus", (e) => {
  e.preventDefault();
  tel.classList.remove("ring-red-600", "ring-1");
  tel.nextElementSibling?.remove();
});

// Checking validity on change
email.addEventListener("blur", () => {
  email.checkValidity();
});

tel.addEventListener("blur", () => {
  tel.checkValidity();
});

//checking form validity before sending

if (true) {
  //Click event on send form
  document
    .getElementById("main-modal-btn")
    .addEventListener("click", async (e) => {
      try {
        e.preventDefault();
        const emailValid = await email.checkValidity();
        const telValid = await tel.checkValidity();

        if (!(emailValid && telValid)) return;

        const inpObj = {};

        Array.from(
          mainModal.querySelectorAll("input ,select"),
          (input) => (inpObj[input.name] = input.value)
        );

        showLoader();

        await fetch("https://submit-form.com/L6ISlz89", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(inpObj),
        });
        hiddeForm();
        showSuccess();
      } catch (err) {
        console.error(err);
        hiddeForm();
        showErr();
      }
    });
}

function showLoader() {
  document.querySelector(".send-btn-txt").classList.add("hidden");
  document.querySelector(".lds-ellipsis").style.display = "inline-block";
}

function hiddeForm() {
  const modalForm = document.getElementById("main-modal").querySelector("form");
  modalForm.classList.add("hidden");
}

function showSuccess() {
  const success = document
    .getElementById("main-modal")
    .querySelector(".success");
  success.classList.remove("hidden");
}

function showErr() {
  const error = document.getElementById("main-modal").querySelector(".error");
  error.classList.remove("hidden");
}

// Initialize modal
document.querySelectorAll(".modal-init").forEach((entry) =>
  entry.addEventListener("click", (e) => {
    initModal();
  })
);

function initModal() {
  const success = document
    .getElementById("main-modal")
    .querySelector(".success");
  success.classList.add("hidden");

  const error = document.getElementById("main-modal").querySelector(".error");
  error.classList.add("hidden");

  document.querySelector(".send-btn-txt").classList.remove("hidden");
  document.querySelector(".lds-ellipsis").style.display = "none";

  const modalForm = document.getElementById("main-modal").querySelector("form");
  modalForm.classList.remove("hidden");
}
