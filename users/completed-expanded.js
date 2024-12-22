document.addEventListener("DOMContentLoaded", () => {
  // Modal elements
  const confirmationModal = document.getElementById("confirmationModal");
  const ratingModal = document.getElementById("ratingModal");
  const checkInvoiceBtn = document.getElementById("checkInvoiceBtn");
  const messageBtn = document.getElementById("messageBtn");
  const cancelConfirm = document.getElementById("cancelConfirm");
  const confirmAction = document.getElementById("confirmAction");
  const cancelConfirmRating = document.getElementById("cancelConfirmRating");
  const confirmActionRating = document.getElementById("confirmActionRating");

  // Open confirmation modal when "Confirm Job" button is clicked
  messageBtn.addEventListener("click", () => {
    confirmationModal.style.display = "flex";
  });

  // Close the confirmation modal when "Cancel" is clicked
  cancelConfirm.addEventListener("click", () => {
    confirmationModal.style.display = "none";
  });

  // Close the confirmation modal and show the rating modal when "Confirm" is clicked
  confirmAction.addEventListener("click", () => {
    confirmationModal.style.display = "none";
    ratingModal.style.display = "flex";
  });

  // Close the rating modal when "No Thanks" is clicked
  cancelConfirmRating.addEventListener("click", () => {
    ratingModal.style.display = "none";
  });

  // Close the rating modal and handle rating submission when "Rate" is clicked
  confirmActionRating.addEventListener("click", () => {
    alert("Thank you for your rating!");
    ratingModal.style.display = "none";
  });

  // Close modals if the user clicks outside of them
  window.addEventListener("click", (event) => {
    if (event.target === confirmationModal) {
      confirmationModal.style.display = "none";
    }
    if (event.target === ratingModal) {
      ratingModal.style.display = "none";
    }
  });
});
