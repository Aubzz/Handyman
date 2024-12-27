document.addEventListener("DOMContentLoaded", function () {
  const resumeInput = document.getElementById("resume-upload");
  const fileLabel = document.querySelector(".file-label span");
  const fileLinkContainer = document.createElement("div"); // Container for the file link

  // Add some margin for spacing
  fileLinkContainer.style.marginTop = "10px";

  // Append the file link container to the form
  document.querySelector(".worker-form").appendChild(fileLinkContainer);

  resumeInput.addEventListener("change", function () {
    if (resumeInput.files.length > 0) {
      const file = resumeInput.files[0];

      // Create a link for the file name
      const fileLink = document.createElement("a");
      const url = URL.createObjectURL(file);
      fileLink.href = url;
      fileLink.target = "_blank"; // Open in a new tab
      fileLink.textContent = `📎 ${file.name}`; // Make the entire label clickable
      fileLink.style.textDecoration = "none"; // Optional: remove underline for better styling
      fileLink.style.cursor = "pointer"; // Show a pointer cursor on hover

      // Set the clickable link as the label content
      fileLabel.innerHTML = ""; // Clear the previous label content
      fileLabel.appendChild(fileLink); // Add the new clickable link

      // Clear previous link container
      fileLinkContainer.innerHTML = "";
    } else {
      // Reset if no file is selected
      fileLabel.textContent = "📎 Attach file";
      fileLinkContainer.innerHTML = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".submit-button");
  const modal = document.getElementById("successModal");
  const closeModalBtn = document.getElementById("closeModalX");

  // Show modal on submit if all fields are filled
  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Check if all required fields are filled
    const phone = document.getElementById("phone").value.trim();
    const resume = document.getElementById("resume-upload").files.length > 0;
    const area = document.getElementById("area-select").value;
    const termsChecked = document.getElementById("terms-checkbox").checked;

    if (phone && resume && area && termsChecked) {
      modal.style.display = "flex"; // Show the modal
    } else {
      alert(
        "Please fill out all fields and agree to the terms before submitting."
      );
    }
  });

  // Close modal when the close button is clicked
  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none"; // Hide the modal
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none"; // Hide the modal
    }
  });
});
