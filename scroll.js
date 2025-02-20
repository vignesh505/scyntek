document.addEventListener("DOMContentLoaded", function () {
    const shadedFigure = document.querySelector(".shaded");
  
    window.addEventListener("scroll", function () {
      const section = document.getElementById("figures-section");
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.5;
  
      if (sectionPosition < screenPosition) {
        shadedFigure.classList.add("show"); // Adds the fade-in effect
      }
    });
  });
  