document.addEventListener("DOMContentLoaded", () => {
  // Add functionality for star ratings
  const starContainers = document.querySelectorAll(".stars");

  starContainers.forEach((container) => {
    const stars = container.querySelectorAll(".star");
    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        // Remove selected class from all stars
        stars.forEach((s) => s.classList.remove("selected"));
        // Add selected class up to the clicked star
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add("selected");
        }
      });
    });
  });

  // Get modal elements
  const appreciationModal = document.getElementById("appreciationModal");
  const closeButton = document.getElementById("closeButton");

  // Get the submit button
  const submitButton = document.querySelector(".submit-button");

  // Show modal when submit button is clicked
  submitButton.addEventListener("click", () => {
    appreciationModal.style.display = "flex"; // Show modal
  });

  // Close the modal and redirect to completed.html when the close button is clicked
  closeButton.addEventListener("click", () => {
    appreciationModal.style.display = "none"; // Hide modal
    window.location.href = "completed.html"; // Redirect to completed.html
  });
});
