const slider = document.querySelector('.slider');
const leftArr = document.querySelector('.leftArr');
const rightArr = document.querySelector('.rightArr');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;


let count = 0;
slider.style.left = count + "%";
let dots = document.querySelectorAll('.point');

let dotToggle = () => {
 
dots.forEach(dot => {dot.addEventListener('click', (e) => { 
dots.forEach(dot => {
dot.classList.remove('active');          
});
e.currentTarget.classList.add('active'); 
if (dots[0] == e.currentTarget) {
count = 0;
} else if (dots[1] == e.currentTarget) {
count = 1;
} else if (dots[2] == e.currentTarget) {
count = 2;
}
verify();
}); 
});
}
dotToggle();
  let verify = () => {
        slider.style.left = count * -100 + "%";
        slideIndex = count
slide();
    }



let slideIndex = 0;

leftArr.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  if(slideIndex == 0) {
    admiral.classList.remove('active_grey');
    admiral.classList.add('active_yellow');
    thieves.classList.add('active_grey');
    patriotic.classList.add('active_grey');
  }else {
    if(slideIndex == 1){
      thieves.classList.remove('active_grey');  
      thieves.classList.add('active_yellow');
      admiral.classList.add('active_grey');
      patriotic.classList.add('active_grey');
    }else {
      patriotic.classList.remove('active_grey');
      patriotic.classList.add('active_yellow');
      admiral.classList.add('active_grey');
      thieves.classList.add('active_grey');
    }
  }
  slide();
});

rightArr.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  if(slideIndex == 0){
    admiral.classList.remove('active_grey');
    admiral.classList.add('active_yellow');
    thieves.classList.add('active_grey');
    patriotic.classList.add('active_grey');
  }else{
    if(slideIndex == 1){
      thieves.classList.remove('active_grey');  
      thieves.classList.add('active_yellow');
      admiral.classList.add('active_grey');
      patriotic.classList.add('active_grey');
    }else{
      patriotic.classList.remove('active_grey');
      patriotic.classList.add('active_yellow');
      admiral.classList.add('active_grey');
      thieves.classList.add('active_grey');
    }
  }
  slide();  
});




const admiral = document.querySelector('.admiral');
const thieves = document.querySelector('.thieves');
const patriotic = document.querySelector('.patriotic');


admiral.addEventListener('click', () => {
  admiral.classList.remove('active_grey');
  admiral.classList.add('active_yellow');
  thieves.classList.add('active_grey');
  patriotic.classList.add('active_grey');
  slideIndex = 0;
  slide();
});

thieves.addEventListener('click', () => {
  thieves.classList.remove('active_grey');  
  thieves.classList.add('active_yellow');
  admiral.classList.add('active_grey');
  patriotic.classList.add('active_grey');
  slideIndex = 1;
  slide();
});

patriotic.addEventListener('click', () => {
  patriotic.classList.remove('active_grey');
  patriotic.classList.add('active_yellow');
  admiral.classList.add('active_grey');
  thieves.classList.add('active_grey');
  slideIndex = 2;
  slide();  
});



const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});


