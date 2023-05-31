const scrollContainer = document.querySelector('main');
console.log(scrollContainer);

const slider = document.querySelector('main'),
  slides = Array.from(document.querySelectorAll('section'));
console.log(slides);

const endWidth = 25;
scrollContainer.addEventListener('wheel', (evt) => {
  // console.log(evt.target.window);
  console.log((scrollContainer.scrollLeft += evt.deltaY));
  evt.preventDefault();
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

  //   Touch Events
  // slide.addEventListener('touchstart', touchStart(index));
  // slide.addEventListener('touchend', touchEnd);
  // slide.addEventListener('touchmove', touchMove);

  // Mouse.events
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
