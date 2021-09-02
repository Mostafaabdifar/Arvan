let slidePosition = 0;
let slides = document.querySelectorAll('.footer__carousel-item');

function show(increase){
  slidePosition = slidePosition + increase;
  slidePosition = Math.min(Math.max(slidePosition,0), slides.length-1);
  slides[slidePosition].scrollIntoView({behavior:"smooth"})
}
