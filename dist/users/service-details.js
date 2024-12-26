document.addEventListener("DOMContentLoaded", () => {
  loadUserProfile(); // Load user profile on page load
  displayReviews();
  displayAverages();
});

function displayReviews() {
  const reviewContainer = document.querySelector(".rating-container");
  reviewContainer.innerHTML = ""; // Clear previous content

  // Fetch reviews from localStorage
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  if (reviews.length === 0) {
    reviewContainer.innerHTML =
      "<p>No reviews yet. Be the first to add one!</p>";
    return;
  }

  // Loop through reviews and display them
  reviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.className = "review";

    const qualityStars = getStarIcons(review.ratings.quality);
    const serviceStars = getStarIcons(review.ratings.service);

    const photosHTML = review.photoURLs
      .map(
        (url) => `<img src="${url}" alt="Review Photo" class="review-photo">`
      )
      .join("");

    reviewElement.innerHTML = `
      <div class="review-meta">
        <p><strong>Quality:</strong> ${qualityStars}</p>
        <p><strong>Service:</strong> ${serviceStars}</p>
        <p><strong>Review:</strong> ${review.reviewText}</p>
        <p><small>${review.date}</small></p>
      </div>
      <div class="review-photos">
        ${photosHTML}
      </div>
    `;
    reviewContainer.appendChild(reviewElement);
  });
}

// Helper function to generate stars
function getStarIcons(count) {
  const fullStar = "⭐";
  const emptyStar = "☆";
  return fullStar.repeat(count) + emptyStar.repeat(5 - count);
}

function displayAverages() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  if (reviews.length === 0) return;

  let totalQuality = 0;
  let totalService = 0;

  reviews.forEach((review) => {
    totalQuality += review.ratings.quality;
    totalService += review.ratings.service;
  });

  const averageQuality = (totalQuality / reviews.length).toFixed(1);
  const averageService = (totalService / reviews.length).toFixed(1);

  const averagesElement = document.createElement("div");
  averagesElement.className = "review-averages";
  averagesElement.innerHTML = `
    <p><strong>Average Quality of Work:</strong> ${getStarIcons(
      Math.round(averageQuality)
    )} (${averageQuality})</p>
    <p><strong>Average Worker Service:</strong> ${getStarIcons(
      Math.round(averageService)
    )} (${averageService})</p>
  `;

  const reviewContainer = document.querySelector(".rating-container");
  reviewContainer.insertBefore(averagesElement, reviewContainer.firstChild);
}

document.addEventListener("DOMContentLoaded", () => {
  displayReviews();
  displayAverages();
});

// Function to generate star icons
function getStarIcons(count) {
  const fullStar = "⭐";
  const emptyStar = "☆";
  return fullStar.repeat(count) + emptyStar.repeat(5 - count);
}

// Function to view the larger image
function viewLargerImage(url) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
      <div class="modal-content">
          <span class="close" onclick="this.parentElement.parentElement.remove();">&times;</span>
          <img src="${url}" alt="Review Photo Large">
      </div>
  `;
  document.body.appendChild(modal);
}
