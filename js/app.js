// scroll to top
const btnScroll = document.querySelector(".scrollToTop");
function showScroll() {
  if (window.scrollY > 150) {
    btnScroll.style.display = "block";
    btnScroll.classList.add("visible");
  } else {
    btnScroll.classList.remove("visible");
    btnScroll.style.display = "none";
  }
}

btnScroll.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
/// menu
const btnOpen = document.querySelector(".header__menu--icon");
const listMenu = document.querySelector(".header__menu--nav");
const btnClose = document.querySelector(".menu__close");
const overlay = document.querySelector(".header__menu--overlay");
btnOpen.addEventListener("click", () => {
  // listMenu.style.display = "flex";
  listMenu.classList.add("show");
  overlay.classList.add("active");
});
btnClose.addEventListener("click", () => {
  listMenu.classList.remove("show");
  overlay.classList.remove("active");
});

//load car
const carBuy = document.querySelector(".buy__container--item--img");
const carSell = document.querySelector(".buy__container--sell--img");

// console.log(position);
function loadCar() {
  if (window.innerWidth >= 992) {
    if (window.scrollY >= 250 && window.scrollY <= 1300) {
      carBuy.classList.add("go");
      carSell.classList.add("go");
    } else {
      carBuy.classList.remove("go");
      carSell.classList.remove("go");
    }
  }
  if (window.innerWidth <= 991) {
    if (window.scrollY >= 400 && window.scrollY <= 1200) {
      carBuy.classList.add("go");
    } else {
      carBuy.classList.remove("go");
    }
    if (window.scrollY >= 800 && window.scrollY <= 1700) {
      carSell.classList.add("go");
    } else {
      carSell.classList.remove("go");
    }
  }
}

const container = document.querySelector(".header__banner--slider");
const slides = document.querySelectorAll(".header__banner--slider img");
const dots = document.querySelectorAll(".header__banner--dots span");
const nextBtn = document.querySelector(".header__banner--btn.next");
const prevBtn = document.querySelector(".header__banner--btn.prev");
let counter = 0;
let size;
window.addEventListener("resize", () => {
  size = slides[0].clientWidth;
});
window.addEventListener("load", () => {
  size = slides[0].clientWidth;

  container.style.transform = `translateX(${-size * counter}px)`;
  dots[counter].classList.add("active");
  //prev
  prevBtn.addEventListener("click", () => {
    if (counter == 0) counter = slides.length;
    container.style.transition = `transform 0.4s ease-in-out`;
    counter--;
    container.style.transform = `translateX(${-size * counter}px)`;

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[counter].classList.add("active");
  });
  //next
  nextBtn.addEventListener("click", () => {
    if (counter >= slides.length - 1) counter = -1;

    container.style.transition = `transform 0.4s ease-in-out`;
    counter++;
    container.style.transform = `translateX(${-size * counter}px)`;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[counter].classList.add("active");
  });
  dots.forEach((e, index) => {
    e.addEventListener("click", () => {
      container.style.transition = `transform 0.4s ease-in-out`;
      if (counter >= index) {
        counter = -1;
      }
      counter++;
      container.style.transform = `translateX(${-size * counter}px)`;
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
      e.classList.add("active");
    });
  });
});
const prev = `<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><img src='./images/left.png' alt=''></button>`;
const next = `<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><img src='./images/right.png' alt=''></button>`;
// service
if ($(".service__main").length > 0) {
  let count = $(".service__count");
  let element = $(".service__main");
  element.on("init reInit afterChange", (e, slick, current, next) => {
    let i = current ? current : 0;
    count.html(`0${i + 1} / 0${slick.slideCount}`);
  });
}
$(".service__main").slick({
  slidesToShow: 1,
  arrows: true,
  prevArrow: prev,
  nextArrow: next,
  autoplay: true,
  autoplaySpeed: 1000,

  infinite: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
});
//gallery
$(".gallery .gallery__list").slick({
  centerMode: true,
  centerPadding: "30px",
  slidesToShow: 3,
  arrows: true,
  prevArrow: prev,
  nextArrow: next,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
});
//scroll window
window.onscroll = function () {
  showScroll();
  loadCar();
  // console.log(window.scrollY);
};
