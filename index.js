const icon = document.querySelector(".nav img");
const menu = document.querySelector(".navLink");
const menuButton = document.querySelector(".navLink button");

icon.addEventListener("click", () => {
  menu.style.visibility = "visible";
  icon.style.visibility = "hidden";
});

menuButton.addEventListener("click", () => {
  menu.style.visibility = "hidden";
  icon.style.visibility = "visible";
});

//---------------------------------------------------------NavBar

const items = document.querySelectorAll(".carousel");
const nbSlide = items.length;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let count = 0;

function nextSlide() {
  items[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
}

next.addEventListener("click", nextSlide);

function prevSlide() {
  items[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  items[count].classList.add("active");
}

prev.addEventListener("click", prevSlide);

//-------------------Carousel

const imagesContainer = document.querySelector(".firstContainer");
const image1 = document.querySelector(".first");
const image2 = document.querySelector(".second");
const image3 = document.querySelector(".third");

window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);
  if (scrollValue > 0.4) {
    image1.style.opacity = 1;
    image1.style.transform = "none";
    image2.style.opacity = 1;
    image2.style.transform = "none";
    image3.style.opacity = 1;
    image3.style.transform = "none";
  } else {
    image1.style.opacity = 0;
    image1.style.transform = "translateX(-1000px)";
    image2.style.opacity = 0;
    image2.style.transform = "translateX(-1000px)";
    image3.style.opacity = 0;
    image3.style.transform = "translateX(-1000px)";
  }
});

//-----Translate images -- voir CSS
