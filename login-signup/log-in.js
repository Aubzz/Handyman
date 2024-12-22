// JavaScript for Login Page
document.addEventListener("DOMContentLoaded", () => {
  // Redirect to 'worker-createaccount.html' when "Become a Worker" is clicked
  const createAccountLink = document.querySelector(".become-worker");
  createAccountLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.href = "become-worker.html";
  });

  // Redirect to 'forgot-password.html' when "Forgot password?" is clicked
  const forgotPasswordLink = document.querySelector(".forgot-password");
  forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.href = "forgot-password.html";
  });

  // Login Functionality
  const form = document.querySelector(".login-form");
  const phoneNumberInput = form.querySelector('input[name="phone"]');
  const passwordInput = form.querySelector('input[name="password"]');

  // Function to validate login credentials
  function validateLogin() {
    const storedUserDetails = localStorage.getItem("userDetails");

    if (storedUserDetails) {
      const userDetails = JSON.parse(storedUserDetails);
      const phoneNumber = phoneNumberInput.value;
      const password = passwordInput.value;
      if (
        phoneNumber === userDetails.phoneNumber &&
        password === userDetails.password
      ) {
        // Successful login, redirect to home page
        window.location.href = "home.html";
      }
      // Condition 2: Phone number is incorrect, password is correct
      else if (
        phoneNumber !== userDetails.phoneNumber &&
        password === userDetails.password
      ) {
        alert("Incorrect phone number");
      }
      // Condition 3: Phone number is correct, password is incorrect
      else if (
        phoneNumber === userDetails.phoneNumber &&
        password !== userDetails.password
      ) {
        alert("Incorrect password");
      }
      // Condition 4: Both phone number and password are incorrect
      else {
        alert("No account found. Please create an account first.");
      }
    } else {
      // No account found, create an account first
      alert("No account found. Please create an account first.");
    }
  }

  // Handle form submission for login
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateLogin();
  });
});

const togglePasswordButtons = document.querySelectorAll(".toggle-password");

togglePasswordButtons.forEach(function (togglePasswordButton) {
  togglePasswordButton.addEventListener("click", function () {
    const passwordField = togglePasswordButton
      .closest("form")
      .querySelector('input[name="password"]'); // Always use name or a unique class/ID

    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;

    // Toggle the emoji between eye and monkey
    if (passwordField.type === "text") {
      togglePasswordButton.innerHTML = "🙈"; // Show monkey emoji
    } else {
      togglePasswordButton.innerHTML = "👁️"; // Show eye emoji
    }
  });
});

// Password hashing function
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
