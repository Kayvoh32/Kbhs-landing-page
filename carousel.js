const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

let index = 0;
const totalSlides = slides.length;

function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
});

setInterval(() => {
  index = (index + 1) % totalSlides;
  showSlide(index);
}, 5000);

const carousel = document.querySelector('.carousel');
let autoScroll;

carousel.addEventListener('mouseenter', () => {
  clearInterval(autoScroll);
});

carousel.addEventListener('mouseleave', () => {
  autoScroll = setInterval(() => {
    index = (index + 1) % totalSlides;
    showSlide(index);
}, 5000);
});

showSlide(index);
document.querySelector('.read-more').addEventListener('click',function(e){
  e.preventDefault();
  const content = document.querySelector('.history-content');
  content.classList.toggle('collapsed');this.textContent = content.classList.contains('collapsed')?
  'Read more':'Show less';
});