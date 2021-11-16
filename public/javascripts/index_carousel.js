const stack_carousel = document.querySelector('.stack_carousel');
const stack_slider = document.querySelector('.stack_slider');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

next.addEventListener('click', function() {
  direction = -1;
  stack_carousel.style.justifyContent = 'flex-start';
  stack_slider.style.transform = 'translate(-1.45%)';  
});

prev.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    stack_slider.appendChild(stack_slider.firstElementChild);
  }
  stack_carousel.style.justifyContent = 'flex-end';    
  stack_slider.style.transform = 'translate(1.45%)';  
  
});

stack_slider.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  
  if (direction === 1) {
    stack_slider.prepend(stack_slider.lastElementChild);
  } else {
    stack_slider.appendChild(stack_slider.firstElementChild);
  }
  
  stack_slider.style.transition = 'none';
  stack_slider.style.transform = 'translate(0)';
  setTimeout(() => {
    stack_slider.style.transition = 'all 0.1s';
  })
}, false);