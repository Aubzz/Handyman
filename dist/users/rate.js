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

// Photo upload and preview
document.getElementById("photo-upload").addEventListener("change", (event) => {
  const photoPreviewContainer = document.getElementById(
    "photo-preview-container"
  );
  photoPreviewContainer.innerHTML = ""; // Clear previous previews

  const files = event.target.files;
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = "Uploaded Photo";
      img.className = "photo-preview";
      photoPreviewContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});

// Function to load the reviews on the profile page
function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const reviewList = document.getElementById("review-list");

  // Retrieve the current user's details
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  reviews.forEach((review) => {
    if (review.workerId === "michael-cruz") {
      // Show reviews only for this worker
      const reviewCard = document.createElement("div");
      reviewCard.classList.add("service-card");

      // Get the reviewer's name and image from the stored userDetails
      const reviewerName = userDetails
        ? `${userDetails.firstName} ${userDetails.lastName}`
        : "Anonymous";
      const reviewerImage = userDetails
        ? userDetails.profilePicture
        : "/dist/users/Images/default-user.png"; // Default image if none exists

      reviewCard.innerHTML = `
        <div class="review-header">
          <img src="${reviewerImage}" alt="Reviewer Image" class="reviewer-image">
          <strong>${reviewerName}</strong>
        </div>
        <div class="service-info">
          <p><strong>Comment:</strong> ${
            review.comment || "No comment provided"
          }</p>
          <p><strong>Quality Rating:</strong> ${review.qualityRating} ⭐</p>
          <p><strong>Service Rating:</strong> ${review.serviceRating} ⭐</p>
        </div>
      `;
      reviewList.appendChild(reviewCard);
    }
  });
}
document.addEventListener("DOMContentLoaded", loadReviews);

// Function to handle review submission
// Function to handle review submission
function submitReview() {
  const qualityRating = document.querySelectorAll(
    '.stars[data-category="quality"] .star.selected'
  ).length;
  const serviceRating = document.querySelectorAll(
    '.stars[data-category="service"] .star.selected'
  ).length;
  const comment = document.getElementById("comment").value;

  // Retrieve the user's details
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const photoElements = document.querySelectorAll(
    "#photo-preview-container img"
  );
  const photoURLs = Array.from(photoElements).map((img) => img.src);

  const reviewerName = userDetails
    ? `${userDetails.firstName} ${userDetails.lastName}`
    : "Anonymous";
  const reviewerImage = userDetails
    ? userDetails.profilePicture
    : "/dist/users/Images/default-user.png";

  const workerId = "michael-cruz"; // Example worker ID
  const workerName = "Michael Cruz"; // Set worker name

  // Retrieve existing reviews from localStorage
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Check if the user has already rated this worker
  const hasRated = reviews.some((review) => review.workerId === workerId);

  if (hasRated) {
    alert("You have already submitted a review for this worker.");
    return; // Prevent further submission
  }

  // Get current date and time
  const dateTime = new Date().toLocaleString();

  // Create a new review object
  const review = {
    workerId,
    workerName, // Include worker's name
    qualityRating,
    serviceRating,
    comment,
    reviewerName,
    reviewerImage,
    photoURLs,
    dateTime, // Add the date and time
  };

  // Save the new review
  reviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  alert("Review submitted successfully!");
  window.location.href = "service-details.html"; // Redirect to worker profile
}
