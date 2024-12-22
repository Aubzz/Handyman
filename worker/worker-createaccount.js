document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".account-form");
  const passwordField = form.elements["password"];
  const phoneNumberField = form.elements["phoneNumber"];
  const firstNameField = form.elements["firstName"];
  const lastNameField = form.elements["lastName"];
  const provinceField = form.elements["province"];
  const categoryField = form.elements["category"];
  const togglePasswordButton = document.querySelector(".toggle-password");

  // Update regex to include more special characters, including underscore
  function isStrongPassword(password) {
    const strongPasswordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/~`\\|-])[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/~`\\|-]{8,}$/;
    return strongPasswordRegex.test(password);
  }

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
        category: categoryField.value,
        province: provinceField.value,
      };

      localStorage.setItem("userDetails", JSON.stringify(userDetails)); // Store user data in localStorage

      alert("Account created successfully! Redirecting to login page...");
      window.location.href = "worker-login.html"; // redirect to login page
    } else {
      alert("Please fill in all fields correctly.");
    }
  });

  // Password toggle functionality (stay visible permanently)
  togglePasswordButton.addEventListener("click", function () {
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;

    // Toggle the emoji between eye and monkey
    if (passwordField.type === "text") {
      togglePasswordButton.innerHTML = "🙈"; // Change to monkey emoji
    } else {
      togglePasswordButton.innerHTML = "👁️"; // Change back to eye emoji
    }
  });
});

// Password hashing function (Optional)
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
