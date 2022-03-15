const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
const links = document.querySelectorAll("a")

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active")
})

// dark mode

const enableDarkMode = () => {
  document.body.classList.add("darkmode")
  links.forEach((link, index) => {
    link.classList.add("darkmodeLink")
  })
  localStorage.setItem("darkMode", "enabled")
  document.getElementById("darkBtn").className = "fas fa-moon"
}

const disableDarkMode = () => {
  document.body.classList.remove("darkmode")
  document.getElementById("darkBtn").className = "fas fa-sun"

  links.forEach((link, index) => {
    link.classList.remove("darkmodeLink")
  })
  localStorage.setItem("darkMode", null)
}

let darkMode = localStorage.getItem("darkMode")
const darkModeToggle = document.querySelector("#darkBtn")

if (darkMode === "enabled") {
  enableDarkMode()
  document.getElementById("darkBtn").className = "fas fa-moon"
} else {
  document.getElementById("darkBtn").className = "fas fa-sun"
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode")
  if (darkMode !== "enabled") {
    enableDarkMode()
    console.log(darkMode)
  } else {
    disableDarkMode()
    console.log(darkMode)
  }
})

// progress bar
const progressBar = document.querySelector("#progress-bar")
const main = document.querySelector("main")
const nav = document.querySelector(".navbar")

const animateProgressBar = () => {
  let scrollDistance = -main.getBoundingClientRect().top
  let progressWidth =
    (scrollDistance /
      (main.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100
  let value = Math.floor(progressWidth)
  progressBar.style.width = `${value}%`

  if (value < 0) {
    progressBar.style.width = "0%"
  }
}

window.addEventListener("scroll", animateProgressBar)

// animation
var slideUp = {
  distance: "150%",
  origin: "left",
  opacity: null,
}

ScrollReveal().reveal("section", slideUp)

// count up animation
function animateValue(id, start, end, duration) {
  var obj = document.getElementById(id)
  var range = end - start
  var minTimer = 50
  var stepTime = Math.abs(Math.floor(duration / range))

  stepTime = Math.max(stepTime, minTimer)

  var startTime = new Date().getTime()
  var endTime = startTime + duration
  var timer

  function run() {
    var now = new Date().getTime()
    var remaining = Math.max((endTime - now) / duration, 0)
    var value = Math.round(end - remaining * range)
    obj.innerHTML = value
    if (value == end) {
      clearInterval(timer)
    }
  }

  timer = setInterval(run, stepTime)
  run()
}

let reached = false

$(window).scroll(function () {
  var hT = $("#stats").offset().top,
    hH = $("#stats").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop()
  if (wS > hT + hH - wH && !reached) {
    reached = true
    animateValue("classes", 0, 295, 2500)
    animateValue("loc", 0, 24153, 2500)
    animateValue("modules", 0, 98, 2500)
    animateValue("cmds", 0, 13, 2500)
  }
})

// image slider
let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName("mySlides")
  let dots = document.getElementsByClassName("dot")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className = "active"
}

setInterval(() => {
  plusSlides(1)
}, 5000)
