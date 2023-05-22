const slider = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.slide'));

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0;

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img');
  slideImage.addEventListener('dragstart', (e) => e.preventDefault());

  //   Touch Events
  slide.addEventListener('touchstart', touchStart(index));
  slide.addEventListener('touchend', touchEnd);
  slide.addEventListener('touchmove', touchMove);

  // Mouse.events
  slide.addEventListener('mousedown', touchStart(index));
  slide.addEventListener('mouseup', touchEnd);
  slide.addEventListener('mouseleave', touchEnd);
  slide.addEventListener('mousemove', touchMove);
});

// Preventing Contextual Menu on Right-click

window.oncontextmenu = (e) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

function touchStart(index) {
  return function (event) {
    // console.log('start');
    currentIndex = index;
    // To check the cursor position in browser with mouse or touch on device.
    // console.log(event.type.includes('mouse'));
    // getPositionX(e) gives the touch Start Position of the cursor
    startPos = getPositionX(event);
    event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    console.log(startPos);
    isDragging = true;

    // https://css-trick.com/using-requestanimationframe/ has best browser performance; can use animation intervals instead
    animationID = requestAnimationFrame(animation);
  };
}

function touchEnd() {
  //   console.log('end');
  isDragging = false;
}

function touchMove(event) {
  if (isDragging) {
    // console.log('move');
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

// function getPositionX(e) {
//   return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
// }
getPositionX = (e) => {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
};

// Function Animation
const animation = () => {
  setSliderPosition();
  if (isDragging) {
    requestAnimationFrame(animation);
  }
};

const setSliderPosition = () => {
  slider.style.transform = `translateX(${currentTranslate}px)`;
};
