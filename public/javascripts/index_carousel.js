//reading the components from html
const stack_carousel = document.querySelector('.stack_carousel');
const stack_slider = document.querySelector('.stack_slider');

//var direction def (-1) next
let direction;

//timer for 1 second
const interval = 2000;

//next button actionListener
const moveNextSlide = () => {
  direction = -1;
  //"concat" the next element at right of the line
  stack_carousel.style.justifyContent = 'flex-start';
  stack_slider.style.transform = 'translate(-1.45%)';  
};

stack_slider.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  
  
    stack_slider.appendChild(stack_slider.firstElementChild);
  
  
  stack_slider.style.transition = 'none';
  stack_slider.style.transform = 'translate(0)';
  setTimeout(() => {
    stack_slider.style.transition = 'all 0.1s';
  })
}, false);

//automatically changing the slider
setInterval(moveNextSlide,interval);
