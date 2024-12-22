document.addEventListener("DOMContentLoaded", () => {
  const rateInput = document.getElementById("jason-rate");
  const saveButton = document.querySelector(".edit");

  saveButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link behavior

    // Get the input value
    const rateValue = rateInput.value.trim();

    // Validate the rate format (₱<number>/hr)
    const ratePattern = /^₱\d+\/hr$/;
    if (!ratePattern.test(rateValue)) {
      alert("Please enter the rate in the format ₱<number>/hr (e.g., ₱200/hr)");
      return;
    }

    // Save the rate to localStorage
    localStorage.setItem("jasonRate", rateValue);
    console.log("Rate saved:", rateValue);

    // Redirect to juan.html
    window.location.href = "jason.html";
  });
});
