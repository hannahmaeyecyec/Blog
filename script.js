// LIGHT & DARK MODE 
const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Save the current theme
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
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