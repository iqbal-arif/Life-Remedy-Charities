const scrollContainer = document.querySelector('main');
console.log(scrollContainer);

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
