document.addEventListener("DOMContentLoaded", () => {
  const rateElement = document.getElementById("bong-rate");

  // Fetch the saved rate from localStorage
  const savedRate = localStorage.getItem("bongRate");

  if (savedRate) {
    // Update the rate element with the saved value
    rateElement.textContent = savedRate;
    console.log("Rate updated on page:", savedRate);
  } else {
    console.log("No saved rate found. Using default value.");
  }
});
