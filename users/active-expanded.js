document.addEventListener("DOMContentLoaded", () => {
  const cancelBookingModal = document.getElementById("cancelBookingModal");
  const cancellationModal = document.getElementById("cancellationModal");

  const cancelButton = document.querySelector(".cancel-btn");
  const backButton = document.querySelector(".modal-btn.back-btn");
  const confirmCancelButton = document.querySelector(
    ".modal-actions .confirmBtn"
  );
  const confirmSuccessButton = document.getElementById("confirmButton");

  // Function to open a modal
  const openModal = (modal) => {
    modal.style.display = "flex";
  };

  // Function to close a modal
  const closeModal = (modal) => {
    modal.style.display = "none";
  };

  // Open the Cancel Booking modal
  cancelButton.addEventListener("click", () => {
    openModal(cancelBookingModal);
  });

  // Close Cancel Booking modal
  backButton.addEventListener("click", () => {
    closeModal(cancelBookingModal);
  });

  // Confirm cancellation and open success modal
  confirmCancelButton.addEventListener("click", () => {
    closeModal(cancelBookingModal); // Close the Cancel Booking modal
    openModal(cancellationModal); // Open the Cancellation Success modal
  });

  // Redirect to cancelled.html after confirming in the success modal
  confirmSuccessButton.addEventListener("click", () => {
    closeModal(cancellationModal); // Close the Cancellation Success modal
    window.location.href = "cancelled-active.html"; // Redirect to cancelled.html
  });
});

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
