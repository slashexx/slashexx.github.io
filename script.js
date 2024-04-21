// let slideIndex = 0;
// const slides = document.querySelectorAll('.slides img');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// function showSlide(n) {
//   if (n < 0) {
//     slideIndex = slides.length - 1;
//   } else if (n >= slides.length) {
//     slideIndex = 0;
//   }
//   slides.forEach(slide => slide.style.display = 'none');
//   slides[slideIndex].style.display = 'block';
// }

// function nextSlide() {
//   showSlide(++slideIndex);
// }

// function prevSlide() {
//   showSlide(--slideIndex);
// }

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);

// showSlide(slideIndex);

let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideWidth = slides.clientWidth; // Get the width of a single slide
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// function showSlide(n) {
//   slideIndex = (n + slides.children.length) % slides.children.length;
//   slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
// }
function showSlide(n) {
    if (n < 0) {
      slideIndex = slides.children.length - 1;
    } else {
      slideIndex = n % slides.children.length;
    }
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }

  
function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(slideIndex);
