document.addEventListener("DOMContentLoaded", () => {
  // Initialize the counts from localStorage
  let pendingCount = parseInt(localStorage.getItem("pendingCount")) || 1;
  let approvedCount = parseInt(localStorage.getItem("approvedCount")) || 0;
  let declinedCount = parseInt(localStorage.getItem("declinedCount")) || 0;

  // Function to update the UI dynamically
  function updateCounts() {
    localStorage.setItem("pendingCount", pendingCount);
    localStorage.setItem("approvedCount", approvedCount);
    localStorage.setItem("declinedCount", declinedCount);
  }

  // Show Approve Modal
  function showApproveModal() {
    document.getElementById("approvalModal").style.display = "block";
  }

  // Show Decline Modal
  function showDeclineModal() {
    document.getElementById("cancelBookingModal").style.display = "block";
  }

  // Close the modal
  function closeModal() {
    document.getElementById("approvalModal").style.display = "none";
    document.getElementById("cancelBookingModal").style.display = "none";
  }

  // Confirm Approval
  function confirmApprove() {
    approvedCount += 1;
    pendingCount -= 1;
    updateCounts();

    // Update Home Page approved count
    localStorage.setItem("approvedCount", approvedCount);

    // Redirect back to admin home
    location.href = "admin-home.html";
  }

  // Confirm Decline
  function confirmDecline() {
    declinedCount += 1;
    pendingCount -= 1;
    updateCounts();

    // Update Home Page declined count
    localStorage.setItem("declinedCount", declinedCount);

    // Redirect back to admin home
    location.href = "admin-home.html";
  }

  // Make functions available globally
  window.showApproveModal = showApproveModal;
  window.showDeclineModal = showDeclineModal;
  window.closeModal = closeModal;
  window.confirmApprove = confirmApprove;
  window.confirmDecline = confirmDecline;
});

// Update counts dynamically from localStorage
document.addEventListener("DOMContentLoaded", function () {
  let pendingCount = localStorage.getItem("pendingCount") || 1;
  let approvedCount = localStorage.getItem("approvedCount") || 2;
  let declinedCount = localStorage.getItem("declinedCount") || 3;

  document.getElementById("pending-count").textContent = pendingCount;
  document.getElementById("approved-count").textContent = approvedCount;
  document.getElementById("declined-count").textContent = declinedCount;
});

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve user details from localStorage
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  if (userDetails) {
    // Get elements to update with user data
    const profileName = document.getElementById("profile-name");
    const profilePhone = document.getElementById("profile-phone");
    const profileCategory = document.getElementById("profile-category");
    const profilePicture = document.getElementById("profile-picture");

    // Update profile with user details
    profileName.textContent = `${userDetails.firstName} ${userDetails.lastName}`;
    profilePhone.textContent = userDetails.phoneNumber;
    profileCategory.textContent = userDetails.category;

    // Update profile picture if available
    if (userDetails.profilePicture) {
      profilePicture.src = userDetails.profilePicture;
    }
  } else {
    // If no user details, redirect to the login page
    window.location.href = "/login-signup/log-in.html";
  }
});
