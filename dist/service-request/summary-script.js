// Populate summary page with data from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem("invoiceData"));

  if (savedData) {
    document.getElementById("hours-worked").textContent = savedData.hoursWorked;
    document.getElementById(
      "rate-per-hour"
    ).textContent = `₱${savedData.ratePerHour}`;
    document.getElementById("subtotal").textContent = savedData.subtotal;
    document.getElementById("other-expenses").textContent =
      savedData.otherExpenses;
    document.getElementById("total").textContent = savedData.total;
    document.getElementById("additional-message").textContent =
      savedData.additionalMessage;
  }
});

// Select elements
const confirmButton = document.getElementById("confirmButton");
const paymentConfirmationModal = document.getElementById(
  "paymentConfirmationModal"
);
const confirmationModal = document.getElementById("confirmationModal");
const cancelButton = document.getElementById("cancelButton");
const confirmPaymentButton = document.getElementById("confirmPaymentButton");

// Show Payment Confirmation Modal
confirmButton.addEventListener("click", () => {
  paymentConfirmationModal.style.display = "flex";
});

// Cancel Payment Confirmation Modal
cancelButton.addEventListener("click", () => {
  paymentConfirmationModal.style.display = "none";
});

// Confirm Payment and Show Service Completed Modal
confirmPaymentButton.addEventListener("click", () => {
  paymentConfirmationModal.style.display = "none";
  confirmationModal.style.display = "flex";
});

// Close modal when clicking outside modal content
window.addEventListener("click", (event) => {
  if (event.target === paymentConfirmationModal) {
    paymentConfirmationModal.style.display = "none";
  }
  if (event.target === confirmationModal) {
    confirmationModal.style.display = "none";
  }
});
