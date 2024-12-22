function toggleDetails(element) {
  const details = element.nextElementSibling; // Find the .details section
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block"; // Show details
    element.querySelector("img").style.transform = "rotate(180deg)"; // Rotate arrow
  } else {
    details.style.display = "none"; // Hide details
    element.querySelector("img").style.transform = "rotate(0deg)"; // Reset arrow
  }
}
