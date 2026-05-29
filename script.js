// Accordion
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;

    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

// Image Slider
const sliderImage = document.getElementById('slider-image');

const images = [
  'gallery1.jpg',
  'gallery2.jpg',
  'gallery3.jpg'
];

let current = 0;

setInterval(() => {
  current++;

  if (current >= images.length) {
    current = 0;
  }

  sliderImage.src = images[current];
}, 3000);

// Smooth Scroll
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');

    if (targetId === '#') return;

    const target = document.querySelector(targetId);

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
