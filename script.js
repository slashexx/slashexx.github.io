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

setInterval(nextSlide, 3000);

function prevSlide() {
  showSlide(slideIndex - 1);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(slideIndex);

let matchName ="";

let t1Score = "";
let t1Wick = "";
let t1Over = "";

let t2Score ="";
let t2Wick = "";
let t2Over = "";

let result = "";

async function pushLiveData(){
  let data = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=58bb08b7-39b3-4863-9c63-9081d7e5d95f&offset=0");

  let jsonData = await data.json();

  console.log(jsonData);
  if (jsonData.data && jsonData.data.length > 0) {
    const matchDetails = jsonData.data[18]; // Accessing the first match details
    const matchName = matchDetails.name;
    const t1Score = matchDetails.score[0].r;
    const t1Wick = matchDetails.score[0].w;
    const t1Over = matchDetails.score[0].o;

    const t2Score = matchDetails.score[1].r;
    const t2Wick = matchDetails.score[1].w;
    const t2Over = matchDetails.score[1].o;

    const result = matchDetails.status;
     
    console.log(matchName);

    let liveScore = document.getElementById("live-score");
    let firstScore = document.getElementById("team1-score");
    let secondScore = document.getElementById("team2-score");
    let resultFin = document.getElementById("result");

    firstScore.innerHTML = `${t1Score}`;
    secondScore.innerHTML = `${t2Score}`;
    resultFin.innerHTML = `${result}`;
    liveScore.innerHTML = `${matchName}`;
  }
  else {
    console.log("No match data available.");
  }

}

pushLiveData();