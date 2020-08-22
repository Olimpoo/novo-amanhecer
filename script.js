/* eslint-disable no-undef */
function toogleMenu() {
  document.getElementById('mobile-menu__open').classList.toggle('hidden');
  document.getElementById('mobile-menu__close').classList.toggle('hidden');
  document.getElementById('mobile-menu__items').classList.toggle('hidden');
}

document.getElementById('mobile-menu__open').addEventListener(
  'click',
  () => {
    toogleMenu();
  },
  false
);
document.getElementById('mobile-menu__close').addEventListener(
  'click',
  () => {
    toogleMenu();
  },
  false
);

var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15,
  },
};

var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    image.style.backgroundPosition = x + 'px';
  });
});
