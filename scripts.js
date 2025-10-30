let swiper = new Swiper(".reviews__slider", {
    loop: true,
    navigation: {
        nextEl: ".reviews__arrow--next",
        prevEl: ".reviews__arrow--prev"
    },
});

document.querySelector(".header__nav-btn").addEventListener("click", evt=> {
  evt.target.classList.toggle("active");
  document.querySelector(".header__links").classList.toggle("active");
})

let headerFigure = document.querySelector(".header__pic path");
let length = headerFigure.getTotalLength();

headerFigure.style.strokeDasharray = length + ' ' + length;
headerFigure.style.strokeDashoffset = length;
headerFigure.getBoundingClientRect();
headerFigure.style.transition = headerFigure.style.WebkitTransition = 'stroke-dashoffset 3s ease-in-out';
headerFigure.style.strokeDashoffset = 0;