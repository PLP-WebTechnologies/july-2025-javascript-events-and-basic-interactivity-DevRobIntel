// -------------------------
// Part 1: Event Handling
// -------------------------
document.getElementById("message-btn").addEventListener("click", function() {
  document.getElementById("message-output").textContent = "Button clicked! JavaScript is responding!";
});

// Theme toggle (Light/Dark Mode)
document.getElementById("theme-toggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// -------------------------
// Part 2: Interactive Elements
// -------------------------

// Counter Game
let counter = 0;
document.getElementById("increase-btn").addEventListener("click", () => {
  counter++;
  document.getElementById("counter-value").textContent = counter;
});

document.getElementById("reset-btn").addEventListener("click", () => {
  counter = 0;
  document.getElementById("counter-value").textContent = counter;
});

// FAQ Section Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// -------------------------
// Extra Feature: Tabbed Interface
// -------------------------
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active from all
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Add active to clicked
    button.classList.add("active");
    const target = button.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});

// -------------------------
// Part 3: Form Validation
// -------------------------
document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Clear old messages
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";
  document.getElementById("form-success").textContent = "";

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("name-error").textContent = "Name must be at least 3 characters long.";
    valid = false;
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").textContent = "Enter a valid email address.";
    valid = false;
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Success
  if (valid) {
    document.getElementById("form-success").textContent = "Form submitted successfully!";
    document.getElementById("signup-form").reset();
  }
});
