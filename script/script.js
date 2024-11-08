const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=> {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  })
}, { threshold: 0.1 })
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>{observer.observe(el)});

function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

function showSideBar() {
  document.querySelector('.sidebar').classList.add('active');
}

function hideSideBar() {
  document.querySelector('.sidebar').classList.remove('active');
}








function calculateCost() {
  const yardSize = Number(document.getElementById("yardSize").value);
  const designOption = document.getElementById("designOption").value;

  let baseRate;
  switch (designOption) {
    case "basic":
      baseRate = 5; // Base rate per sq ft for Basic option
      break;
    case "premium":
      baseRate = 10; // Base rate per sq ft for Premium option
      break;
    case "deluxe":
      baseRate = 15; // Base rate per sq ft for Deluxe option
      break;
  }

  if (!isNaN(yardSize) && baseRate) {
    const estimatedCost = yardSize * baseRate;
    document.getElementById(
      "result"
    ).innerText = `Estimated Cost: $${estimatedCost.toFixed(2)}`;
  } else {
    document.getElementById("result").innerText = "Please enter a valid yard size and select a design option.";
  }
}




document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const container = document.querySelector(".testimonial-container");
  const slides = document.querySelectorAll(".testimonial");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  function updateSlideWidth() {
    return document.querySelector(".testimonial") ? document.querySelector(".testimonial").offsetWidth : 0;
  }

  function updateArrowVisibility() {
    if (currentIndex === 0) {
      arrowLeft.classList.add("hidden");
    } else {
      arrowLeft.classList.remove("hidden");
    }

    if (currentIndex === slides.length - 1) {
      arrowRight.classList.add("hidden");
    } else {
      arrowRight.classList.remove("hidden");
    }
  }

  function showSlide(index) {
    const slideWidth = updateSlideWidth();
    if (container) {
      container.style.transform = `translateX(${-index * slideWidth}px)`;
    }
    updateArrowVisibility();
  }

  function nextSlide() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      showSlide(currentIndex);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  }

  if (container && slides.length > 0) {
    showSlide(currentIndex);
  }

  window.addEventListener("resize", () => {
    showSlide(currentIndex);
  });

  if (arrowLeft) arrowLeft.addEventListener("click", prevSlide);
  if (arrowRight) arrowRight.addEventListener("click", nextSlide);
});
