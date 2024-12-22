// JavaScript for Login Page
document.addEventListener("DOMContentLoaded", () => {
  // Redirect to 'worker-createaccount.html' when "Become a Worker" is clicked
  const createAccountLink = document.querySelector("#create-account-link");
  if (createAccountLink) {
    createAccountLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      window.location.href = "worker-createaccount.html";
    });
  }

  // Redirect to 'forgot-password.html' when "Forgot password?" is clicked
  const forgotPasswordLink = document.querySelector(".forgot-password");
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      window.location.href = "/login-signup/forgot-password.html";
    });
  }

  // Login Functionality
  const form = document.querySelector(".login-form");
  if (form) {
    const phoneNumberInput = form.querySelector('input[name="phone"]');
    const passwordInput = form.querySelector('input[name="password"]');

    // Function to validate login credentials
    function validateLogin() {
      const storedUserDetails = localStorage.getItem("userDetails");

      if (storedUserDetails) {
        const userDetails = JSON.parse(storedUserDetails);
        const phoneNumber = phoneNumberInput.value.trim();
        const password = passwordInput.value.trim();

        if (
          phoneNumber === userDetails.phoneNumber &&
          password === userDetails.password
        ) {
          // Successful login, redirect to home page
          window.location.href = "home.html";
        } else if (
          phoneNumber !== userDetails.phoneNumber &&
          password === userDetails.password
        ) {
          alert("Incorrect phone number");
        } else if (
          phoneNumber === userDetails.phoneNumber &&
          password !== userDetails.password
        ) {
          alert("Incorrect password");
        } else {
          alert("No account found. Please create an account first.");
        }
      } else {
        alert("No account found. Please create an account first.");
      }
    }

    // Handle form submission for login
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateLogin();
    });
  }
});
