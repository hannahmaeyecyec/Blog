// Theme Toggle Script
const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Change the icon
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});


  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.createElement("nav");

  // Create mobile nav and clone desktop menu items
  mobileNav.classList.add("mobile-nav");
  mobileNav.innerHTML = `
    <ul>
      ${document.querySelector(".main-nav ul").innerHTML}
    </ul>
  `;
  
  document.body.appendChild(mobileNav);

  // Toggle menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });

  // Close menu when clicking a link
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileNav.classList.remove("active");
    });
  });