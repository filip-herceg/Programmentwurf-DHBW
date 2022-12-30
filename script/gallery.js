const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider-inner');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

let currentSlide = 0;
const slideWidth = slider.offsetWidth;

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) currentSlide = sliderInner.children.length - 1;
  sliderInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});
nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= sliderInner.children.length) currentSlide = 0;
  sliderInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});
