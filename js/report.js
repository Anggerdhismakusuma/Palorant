// Toggle class active
const menuContainer = document.querySelector(".menu-container");
document.querySelector("#hamburger-menu").onclick = () => {
  menuContainer.classList.toggle("active");
};

// Click to close sidebar
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !menuContainer.contains(e.target)) {
    menuContainer.classList.remove("active");
  }
});

function validateForm() {
  let isValid = true;

  // Get input values
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const server = document.getElementById('server');
  const description = document.getElementById('description');
  const checkbox = document.getElementById('followup');

  // Error elements
  const usernameError = document.getElementById('usernameError');
  const emailError = document.getElementById('emailError');
  const serverError = document.getElementById('serverError');
  const descriptionError = document.getElementById('descriptionError');
  const checkboxError = document.getElementById('checkboxError');

  // Reset styles
  [username, email, server, description].forEach(input => {
    input.classList.remove('error');
  });
  [usernameError, emailError, serverError, descriptionError, checkboxError].forEach(err => {
    err.style.display = 'none';
  });

  // Username validation
  if (username.value.trim().length < 3) {
    username.classList.add('error');
    usernameError.textContent = "Username must be at least 3 characters.";
    usernameError.style.display = 'block';
    isValid = false;
  }

  // Email validation
  if (!email.value.includes("@") || !email.value.endsWith("palorant.com")) {
    email.classList.add('error');
    emailError.textContent = "Please enter a valid email.";
    emailError.style.display = 'block';
    isValid = false;
  }

  // Server validation
  if (server.value === "") {
    server.classList.add('error');
    serverError.textContent = "Please select a server.";
    serverError.style.display = 'block';
    isValid = false;
  }

  // Description validation
  if (description.value.trim().length < 10) {
    description.classList.add('error');
    descriptionError.textContent = "Description must be at least 10 characters.";
    descriptionError.style.display = 'block';
    isValid = false;
  }

  // Checkbox validation
  if (!checkbox.checked) {
    checkboxError.textContent = "You must allow follow-up emails.";
    checkboxError.style.display = 'block';
    isValid = false;
  }

  return isValid;
}