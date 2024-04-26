//  hamburger-meny  //
window.onload = function () {
  window.addEventListener('scroll', function (e) {
      if (window.scrollY > 100) {
          document.querySelector("header").classList.add('is-scrolling');
      } else {
          document.querySelector("header").classList.remove('is-scrolling');
      }
  });

  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
  });
};


//   Slider  //
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})






//// text-box-carousel ////

const boxes = document.querySelectorAll('.box');
let currentIndex = 0;

function showSlide(index) {
  boxes.forEach(box => box.classList.remove('active'));
  boxes[index].classList.add('active');
}

document.querySelectorAll('.next').forEach(nextButton => {
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % boxes.length;
    showSlide(currentIndex);
  });
});

document.querySelectorAll('.prev').forEach(prevButton => {
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
    showSlide(currentIndex);
  });
});

// Show the first slide initially
showSlide(currentIndex);













