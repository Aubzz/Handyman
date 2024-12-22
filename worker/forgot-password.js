document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.querySelector(".back-button");
  const signupLink = document.querySelector(".link");
  const forgotPasswordForm = document.getElementById("forgot-password-form");
  const togglePasswordButtons = document.querySelectorAll(".toggle-password");

  // Back button functionality
  backButton.addEventListener("click", () => {
    window.history.back(); // Go back to the previous page
  });

  // Sign-up link functionality
  signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "worker-createaccount.html";
  });

  // Toggle password visibility
  togglePasswordButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetInput = document.getElementById(
        button.getAttribute("data-target")
      );
      if (targetInput.type === "password") {
        targetInput.type = "text";
        button.textContent = "🙈"; // Change icon to closed eye
      } else {
        targetInput.type = "password";
        button.textContent = "👁️"; // Change icon to open eye
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

  // Form submission and password validation
  forgotPasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!newPassword || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Hash the new password
    const hashedPassword = await hashPassword(newPassword);

    // Store hashed password in localStorage (for demonstration only)
    localStorage.setItem("workerPassword", hashedPassword);

    alert("Password changed successfully!");
    window.location.href = "worker-login.html";
  });
});
