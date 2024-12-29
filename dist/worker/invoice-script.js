// Automatically calculate subtotal and total as inputs are updated
document
  .getElementById("hours-worked")
  .addEventListener("input", calculateSubtotal);
document
  .getElementById("rate-per-hour")
  .addEventListener("input", calculateSubtotal);
document
  .getElementById("other-expenses")
  .addEventListener("input", calculateTotal);

function calculateSubtotal() {
  const hoursWorked =
    parseFloat(document.getElementById("hours-worked").value) || 0;
  const ratePerHour =
    parseFloat(document.getElementById("rate-per-hour").value) || 0;

  const subtotal = hoursWorked * ratePerHour;
  document.getElementById("subtotal").textContent = `₱${subtotal.toFixed(2)}`;

  calculateTotal(); // Update total as subtotal changes
}

function calculateTotal() {
  const subtotal =
    parseFloat(
      document.getElementById("subtotal").textContent.replace("₱", "")
    ) || 0;
  const otherExpenses =
    parseFloat(document.getElementById("other-expenses").value) || 0;

  const total = subtotal + otherExpenses;
  document.getElementById("total").textContent = `₱${total.toFixed(2)}`;
}

// Save data to localStorage when the "Send to Client" button is clicked
document.querySelector(".send-btn").addEventListener("click", () => {
  const hoursWorked = document.getElementById("hours-worked").value || "0";
  const ratePerHour = document.getElementById("rate-per-hour").value || "0";
  const subtotal = document.getElementById("subtotal").textContent;
  const otherExpenses =
    document.getElementById("other-expenses").value || "₱0.00";
  const total = document.getElementById("total").textContent;
  const additionalMessage =
    document.getElementById("additional-message").value || "";

  // Save data to localStorage
  localStorage.setItem(
    "invoiceData",
    JSON.stringify({
      hoursWorked,
      ratePerHour,
      subtotal,
      otherExpenses,
      total,
      additionalMessage,
    })
  );

  alert("Invoice data has been saved!");

  // Redirect to conversation.html
  window.location.href = "conversation.html";
});
