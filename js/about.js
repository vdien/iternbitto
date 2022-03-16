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
const btnOpenb = document.querySelector(".headerb__menu--icon");
const listMenub = document.querySelector(".headerb__menu--nav");
const btnCloseb = document.querySelector(".menu__close");
const overlayb = document.querySelector(".headerb__menu--overlay");
btnOpenb.addEventListener("click", () => {
  // listMenu.style.display = "flex";
  listMenub.classList.add("show");
  overlayb.classList.add("active");
});
btnCloseb.addEventListener("click", () => {
  listMenub.classList.remove("show");
  overlayb.classList.remove("active");
});

const counts = document.querySelectorAll(".value");

window.onscroll = function () {
  if (counts.length > 0) {
    if (window.scrollY > 400 && window.scrollY < 1500) {
      counts.forEach((e) => {
        const count = () => {
          const value = +e.getAttribute("count");
          const data = +e.innerText;
          let time = value / 200;
          if (data < value) {
            e.innerText = Math.ceil(data + time);
            setTimeout(count, 100);
          } else {
            e.innerText = value;
          }
        };
        count();
      });
    }
  }
};
