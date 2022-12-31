// Konstante Variable "slider" wird auf das Element mit der Klasse "slider" gesetzt
const slider = document.querySelector('.slider');
// Konstante Variable "sliderInner" wird auf das Element mit der Klasse "slider-inner" gesetzt
const sliderInner = document.querySelector('.slider-inner');
// Konstante Variable "prevButton" wird auf das Element mit der Klasse "slider-prev" gesetzt
const prevButton = document.querySelector('.slider-prev');
// Konstante Variable "nextButton" wird auf das Element mit der Klasse "slider-next" gesetzt
const nextButton = document.querySelector('.slider-next');

// Letzter gewählter Slide wird auf 0 gesetzt
let currentSlide = 0;
// Konstante Variable "slideWidth" wird auf die Breite des Sliders gesetzt
const slideWidth = slider.offsetWidth;

// Wenn auf den "prevButton" geklickt wird, wird die currentSlide-Variable um 1 reduziert
prevButton.addEventListener('click', () => {
  currentSlide--;
  // Wenn currentSlide kleiner als 0 ist, wird currentSlide auf die Anzahl der Kinder-Elemente im "sliderInner" - 1 gesetzt
  if (currentSlide < 0) currentSlide = sliderInner.children.length - 1;
  // Der Transformationswert des "sliderInner" Elements wird auf den Wert "translateX(-${currentSlide * slideWidth}px)" gesetzt
  sliderInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

// Wenn auf den "nextButton" geklickt wird, wird die currentSlide-Variable um 1 erhöht
nextButton.addEventListener('click', () => {
  currentSlide++;
  // Wenn currentSlide größer oder gleich der Anzahl der Kinder-Elemente im "sliderInner" ist, wird currentSlide auf 0 gesetzt
  if (currentSlide >= sliderInner.children.length) currentSlide = 0;
  // Der Transformationswert des "sliderInner" Elements wird auf den Wert "translateX(-${currentSlide * slideWidth}px)" gesetzt
  sliderInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});
