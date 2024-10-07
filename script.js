document.addEventListener('DOMContentLoaded', function () {  
  // ** Lógica para el primer carrusel **  
  const carousel = document.querySelector('.carousel-inner');  
  const slides = carousel.querySelectorAll('.carousel-item');  
  const prevBtn = document.querySelector('.carousel-control-prev');  
  const nextBtn = document.querySelector('.carousel-control-next');  

  let slideIndex = 0;  
  const slideWidth = slides[0].clientWidth;  

  function showSlide(index) {  
      carousel.style.transform = `translateX(-${index * slideWidth}px)`;  
  }  

  function nextSlide() {  
      slideIndex = (slideIndex + 1) % slides.length;  
      showSlide(slideIndex);  
  }  

  function prevSlide() {  
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;  
      showSlide(slideIndex);  
  }  

  setInterval(nextSlide, 6000);  

  prevBtn.addEventListener('click', prevSlide);  
  nextBtn.addEventListener('click', nextSlide);  

  // ** Lógica para el segundo carrusel **  
  const carousel2 = document.querySelector('.carousel2-inner');  
  const slides2 = carousel2.querySelectorAll('.carousel2-item');  
  const prevBtn2 = document.querySelector('.carousel2-control-prev');  
  const nextBtn2 = document.querySelector('.carousel2-control-next');  

  let slideIndex2 = 0;  
  const slideWidth2 = slides2[0].clientWidth;  

  function showSlide2(index) {  
      carousel2.style.transform = `translateX(-${index * slideWidth2}px)`;  
  }  

  function nextSlide2() {  
      slideIndex2 = (slideIndex2 + 1) % slides2.length;  
      showSlide2(slideIndex2);  
  }  

  function prevSlide2() {  
      slideIndex2 = (slideIndex2 - 1 + slides2.length) % slides2.length;  
      showSlide2(slideIndex2);  
  }  

  setInterval(nextSlide2, 7000);  // Cambia el intervalo según sea necesario  

  prevBtn2.addEventListener('click', prevSlide2);  
  nextBtn2.addEventListener('click', nextSlide2);  
});