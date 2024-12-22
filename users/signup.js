document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".signup-form");
  const passwordField = form.elements["password"];
  const phoneNumberField = form.elements["phone"];
  const firstNameField = form.elements["first-name"];
  const lastNameField = form.elements["last-name"];
  const provinceField = form.elements["province"];
  const togglePasswordButton = document.querySelector(".toggle-password");

  // Password strength validation
  function isStrongPassword(password) {
    const strongPasswordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/~`\\|-])[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/~`\\|-]{8,}$/;
    return strongPasswordRegex.test(password);
  }

  // Phone number validation
  function isValidPhoneNumber(phone) {
    const phoneRegex = /^0\d{10}$/;
    return phoneRegex.test(phone);
  }

  passwordField.addEventListener("input", function () {
    const password = passwordField.value;
    if (!isStrongPassword(password)) {
      passwordField.setCustomValidity(
        "Password must be at least 8 characters long, contain at least one letter, one number, and one special character."
      );
    } else {
      passwordField.setCustomValidity("");
    }
  });

  phoneNumberField.addEventListener("input", function () {
    const phone = phoneNumberField.value;
    if (!isValidPhoneNumber(phone)) {
      phoneNumberField.setCustomValidity(
        "Phone number must be 11 digits and start with 0."
      );
    } else {
      phoneNumberField.setCustomValidity("");
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (form.checkValidity()) {
      // Save user details in localStorage
      const userDetails = {
        firstName: firstNameField.value,
        lastName: lastNameField.value,
        phoneNumber: phoneNumberField.value,
        password: passwordField.value,
        province: provinceField.value,
      };

      localStorage.setItem("userDetails", JSON.stringify(userDetails));

      alert("Account created successfully! Redirecting to login page...");
      window.location.href = "log-in.html";
    } else {
      alert("Please fill in all fields correctly.");
    }
  });

  // Optional: Password toggle functionality (if applicable)
  if (togglePasswordButton) {
    togglePasswordButton.addEventListener("click", function () {
      const type = passwordField.type === "password" ? "text" : "password";
      passwordField.type = type;
    });
  }
});
