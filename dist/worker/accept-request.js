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
