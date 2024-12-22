// JavaScript for handling modal visibility
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("cancelBookingModal");
  const cancelButton = document.querySelector(".cancel-btn");
  const backButton = document.querySelector(".modal-btn.back-btn");
  const cancelActionButton = document.querySelector(
    ".modal-actions .cancel-btn"
  );

  const openModal = () => {
    modal.style.display = "flex";
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });

  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  cancelActionButton.addEventListener("click", () => {
    alert("Booking Cancelled!");
    closeModal();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const checkInvoiceBtn = document.getElementById("checkInvoiceBtn");

  checkInvoiceBtn.addEventListener("click", () => {
    window.location.href = "completed-invoice.html";
  });
});

document
  .getElementById("checkInvoiceBtn")
  .addEventListener("click", function () {
    window.location.href = "/worker/bookings-invoice.html"; // Navigate to bookings invoice page
  });

document.getElementById("messageBtn").addEventListener("click", function () {
  window.location.href = "/worker/bookings-message.html"; // Navigate to bookings message page
});
