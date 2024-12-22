document.addEventListener("DOMContentLoaded", () => {
  const cancelBookingModal = document.getElementById("cancelBookingModal");
  const cancellationModal = document.getElementById("cancellationModal");
  const confirmationModal = document.getElementById("confirmationModal");

  const cancelButton = document.querySelector(".cancel-btn");
  const backButton = document.querySelector(".modal-btn.back-btn");
  const confirmCancelButton = document.querySelector(
    ".modal-actions .cancelBtn"
  );
  const confirmSuccessButton = document.getElementById("confirmButton");
  const confirmActionButton = document.getElementById("confirmAction");
  const cancelConfirmButton = document.getElementById("cancelConfirm");

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
    closeModal(cancelBookingModal);
    openModal(cancellationModal);
  });

  // Close success modal on confirm
  confirmSuccessButton.addEventListener("click", () => {
    closeModal(cancellationModal);
  });

  document
    .getElementById("confirmButton")
    .addEventListener("click", function () {
      window.location.href = "cancelled.html";
    });

  // Open the confirmation modal
  document.querySelector(".start-btn").addEventListener("click", () => {
    openModal(confirmationModal);
  });
  confirmActionButton.addEventListener("click", () => {
    closeModal(confirmationModal);
    window.location.href = "/worker/start-job.html"; // Replace with the actual file path or URL
  });

  cancelConfirmButton.addEventListener("click", () => {
    closeModal(confirmationModal);
  });
});
