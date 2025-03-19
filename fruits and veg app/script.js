let currentIndex = 0;
const slides = document.querySelectorAll('.swiper-slide');
const totalSlides = slides.length;
const swiperWrapper = document.querySelector('.swiper-wrapper');
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');
const pagination = document.querySelector('.swiper-pagination');

// Create pagination dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => moveToSlide(i));
  pagination.appendChild(dot);
}

const dots = document.querySelectorAll('.swiper-pagination span');
dots[currentIndex].classList.add('active');

function moveToSlide(index) {
  currentIndex = index;
  swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  updatePagination();
}

function updatePagination() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  moveToSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  moveToSlide(currentIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Swiping functionality
let startX, endX;

swiperWrapper.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

swiperWrapper.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    nextSlide(); // Swipe left (next)
  } else if (endX - startX > 50) {
    prevSlide(); // Swipe right (previous)
  }
});

// Optional: Auto slide every 3 seconds
setInterval(nextSlide, 3000);
/* review*/


