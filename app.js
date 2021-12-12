const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const links = document.querySelectorAll("a");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// dark mode

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  links.forEach((link, index) => {
    link.classList.add("darkmodeLink");
  });
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  links.forEach((link, index) => {
    link.classList.remove("darkmodeLink");
  });
  localStorage.setItem("darkMode", null);
};

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#darkBtn");

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});

// progress bar
const progressBar = document.querySelector("#progress-bar");
const main = document.querySelector("main");
const nav = document.querySelector(".navbar")

const animateProgressBar = () => {
  let scrollDistance = -main.getBoundingClientRect().top;
  let progressWidth =
    (scrollDistance /
      (main.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;
  let value = Math.floor(progressWidth);
  progressBar.style.width = `${value}%`;

  if (value < 0) {
    progressBar.style.width = "0%";
  }
};

window.addEventListener("scroll", animateProgressBar);

// animation
var slideUp = {
  distance: '150%',
  origin: 'left',
  opacity: null,
};

ScrollReveal().reveal('section', slideUp);
