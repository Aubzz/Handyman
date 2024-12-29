// Select the necessary elements
const finishButton = document.getElementById("finishButton");
const modal = document.getElementById("confirmationModal");
const viewRequestsButton = document.getElementById("viewRequestsButton");

// Show the modal when the "Decline" button is clicked
finishButton.addEventListener("click", () => {
  modal.style.display = "flex"; // Show the modal with flexbox
});

// Optional: Hide the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; // Hide the modal
  }
});
