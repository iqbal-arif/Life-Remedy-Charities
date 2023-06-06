/*****************/
const scrollContainer = document.querySelector('main');
/*****************/
console.log(scrollContainer);

const slider = document.querySelector('main'),
  slides = Array.from(document.querySelectorAll('section'));
console.log(slides);

const endWidth = 15;
scrollContainer.addEventListener('wheel', (evt) => {
  // console.log(evt.target.window);
  console.log((scrollContainer.scrollLeft += evt.deltaY));
  /*****************/
  evt.preventDefault();
  // scrollContainer.scrollLeft += evt.deltaY;
  /*****************/
  let scrolled = (scrollContainer.scrollLeft += evt.deltaY);
  console.log(scrollContainer.scrollLeft);
  const sectionWidth = scrollContainer.scrollWidth;
  const totalWidth = (scrollContainer.scrollLeft / sectionWidth) * 100;
  console.log(totalWidth);
  document.getElementById('myBar').style.width = totalWidth + endWidth + '%';
});

// scrollContainer.addEventListener('ontouchStart', (e) => {
//   var x = e.touches[0].clientX;
//   var y = e.touches[0].clientY;
//   document.querySelectorAll('section').innerHTML = x + ', ' + y;
// });

// function myFunction(event) {
//   var x = event.touches[0].clientX;
//   var y = event.touches[0].clientY;
//   document.querySelectorAll('section').innerHTML = x + ', ' + y;
// }

slides.forEach((slide, index) => {
  console.log(slide, index);

  // Touch Events
  // slide.addEventListener('touchstart', touchStart(index));
  // slide.addEventListener('touchend', touchEnd);
  // slide.addEventListener('touchmove', touchMove);

  // Mouse.events;
  // slide.addEventListener('mousedown', touchStart(index));
  // slide.addEventListener('mouseup', touchEnd);
  // slide.addEventListener('mouseleave', touchEnd);
  // slide.addEventListener('mousemove', touchMove);
});

/***********W3****************************************** 
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  console.log('I am scrolled');
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  console.log(winScroll);
  var height =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;
  console.log(height);
  var scrolled = (winScroll / height) * 100;
  console.log(scrolled);
  document.getElementById('myBar').style.width = scrolled + '%';
}
/***********W3****************************************** */

/*********************************************** */
/*********************************************** */
/*********************************************** */
/*********************************************** */
/*********************************************** */
/*********************************************** */

/*

const slider = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('picture'));
console.log(slides);
// States
let isDragging = false, //Whether we touch or click on the item, initially set to false
  startPos = 0, //Wherever we click or finger is on mobile device
  currentTranslate = 0, //
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0; // slides index

slides.forEach((slide, index) => {
  console.log(slide, index);
  // Prevent Pick and Drag of the image
  const slideImage = slide.querySelector('source');
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

// window.oncontextmenu = (e) => {
//   e.preventDefault();
//   e.stopPropagation();
//   return false;
// };

function touchStart(index) {
  return function (event) {
    // console.log('start');
    currentIndex = index;
    // To check the cursor position in browser with mouse or touch on device.
    // console.log(event.type.includes('mouse'));
    // getPositionX(e) gives the touch Start Position of the cursor
    startPos = getPositionX(event);
    // event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    console.log(startPos);
    isDragging = true;

    // https://css-trick.com/using-requestanimationframe/ has best browser performance; can use animation intervals instead
    animationID = requestAnimationFrame(animation);
    // Adding Grabbing functionality
    slider.classList.add('grabbing');
  };
}

function touchEnd() {
  //   console.log('end');
  isDragging = false;
  cancelAnimationFrame(animationID);
  //  Slide snapping functionality
  const movedBy = currentTranslate - prevTranslate;
  // Slide to Right-side check
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
  // Slide to Left-side check
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
  // Removing Grabbing functionality
  slider.classList.remove('grabbing');

  setPositionByIndex();
}

function touchMove(event) {
  if (isDragging) {
    // console.log('move');
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

getPositionX = (e) => {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
};

// Function Animation
const animation = () => {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
};

const setSliderPosition = () => {
  slider.style.transform = `translateX(${currentTranslate}px)`;
};

const setPositionByIndex = () => {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
};

*/
