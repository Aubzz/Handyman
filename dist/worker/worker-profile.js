// worker-profile.js

// Load profile details from localStorage
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve profile data from localStorage
  const profileName = document.getElementById("profile-name");
  const profilePhone = document.getElementById("profile-phone");
  const profilePhoto = document.getElementById("profile-picture"); // Updated ID
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  if (userDetails) {
    profileName.textContent = `${userDetails.firstName} ${userDetails.lastName}`;
    profilePhone.textContent = userDetails.phoneNumber;
    profilePhoto.src = userDetails.profilePicture || "g"; // Default image
  }

  // Redirect to edit profile page when edit icon is clicked
  document.getElementById("edit-icon").addEventListener("click", function () {
    window.location.href = "worker-editprofile.html";
  });

  // Make the profile options clickable
  document.getElementById("my-reviews").addEventListener("click", function () {
    window.location.href = "/login-signup/my-reviews.html";
  });

  document
    .getElementById("change-password")
    .addEventListener("click", function () {
      window.location.href = "forgot-password.html";
    });

  document
    .getElementById("customer-support")
    .addEventListener("click", function () {
      window.location.href = "/login-signup/customer-support.html";
    });

  document
    .getElementById("terms-of-use")
    .addEventListener("click", function () {
      window.location.href = "/login-signup/terms-of-use.html";
    });

  // Logout functionality
  document.getElementById("logout-btn").addEventListener("click", function () {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      window.location.href = "worker-login.html";
    }
  });
});
