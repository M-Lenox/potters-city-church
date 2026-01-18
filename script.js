document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Background Slider (5s Interval) ---
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function nextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  if (slides.length > 0) {
    slides[0].classList.add("active");
    setInterval(nextSlide, 5000);
  }

  // --- 2. Mobile Menu (Hamburger to X) ---
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    if (isOpen) {
      menuToggle.innerHTML = "&times;"; // Changes ☰ to X
      menuToggle.style.transform = "rotate(90deg)";
    } else {
      menuToggle.innerHTML = "&#9776;"; // Changes X back to ☰
      menuToggle.style.transform = "rotate(0deg)";
    }
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.innerHTML = "&#9776;";
      menuToggle.style.transform = "rotate(0deg)";
    });
  });

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "all 0.6s ease-out";
    observer.observe(item);
  });
});
