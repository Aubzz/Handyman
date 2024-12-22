// Select the necessary elements
const declineButton = document.getElementById("declineButton");
const modal = document.getElementById("confirmationModal");
const viewRequestsButton = document.getElementById("viewRequestsButton");

// Show the modal when the "Decline" button is clicked
declineButton.addEventListener("click", () => {
  modal.style.display = "flex"; // Show the modal with flexbox
});

// Optional: Hide the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; // Hide the modal
  }
});

// Select necessary elements
const requestImage = document.getElementById("requestImage");
const imageModal = document.getElementById("imageOverlay");
const modalImage = document.getElementById("modalImage");
const closeImageModal = document.getElementById("closeImageModal");

// Show the image modal when the thumbnail image is clicked
requestImage.addEventListener("click", () => {
  modalImage.src = requestImage.src; // Set the modal image source to the clicked image
  imageModal.style.display = "flex"; // Show the modal
});

// Hide the image modal when the close icon is clicked
closeImageModal.addEventListener("click", () => {
  imageModal.style.display = "none"; // Hide the modal
});

// Optional: Hide the modal when clicking outside the image content
window.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    imageModal.style.display = "none"; // Hide the modal
  }
});
