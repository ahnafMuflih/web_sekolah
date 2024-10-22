// JavaScript untuk interaksi dropdown
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('mouseover', function() {
        this.querySelector('.dropdown-content').style.display = 'block';
      });
  
      dropdown.addEventListener('mouseout', function() {
        this.querySelector('.dropdown-content').style.display = 'none';
      });
    });
  });
  
  // JavaScript untuk tombol register di job-section
  document.querySelector('.register-button').addEventListener('click', function() {
    alert('Anda telah terdaftar untuk pekerjaan ini!');
  });
  
  // JavaScript untuk navigasi slider pada job-section (misalnya untuk mengganti konten gambar)
  let currentSlide = 0;
  const slides = document.querySelectorAll('.job-poster img');
  const nextBtn = document.querySelector('.job-section .navigation .next');
  const prevBtn = document.querySelector('.job-section .navigation .prev');
  
  nextBtn.addEventListener('click', function() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
  });
  
  prevBtn.addEventListener('click', function() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
  });
  
  // JavaScript untuk smooth scroll ketika mengklik link pada navbar
  const navLinks = document.querySelectorAll('.navbar a');
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  