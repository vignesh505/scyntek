document.addEventListener("DOMContentLoaded", function () {
  const figuresSection = document.getElementById("figures-section");
  const lastFigure = document.querySelector(".figures .shaded");

  // Ensure last figure starts blue
  lastFigure.style.fill = "#3b6b9b";

  function handleScroll() {
      const sectionPosition = figuresSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (sectionPosition < viewportHeight * 0.75) {
          lastFigure.style.fill = "black";
      } else {
          lastFigure.style.fill = "#3b6b9b"; // Reset to blue when scrolling away
      }
  }

  window.addEventListener("scroll", handleScroll);
});


