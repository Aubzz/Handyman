document.addEventListener("DOMContentLoaded", function() {
    // Retrieve user details from localStorage
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    
    if (userDetails) {
        // Get elements to update with user data
        const profileName = document.getElementById("profile-name");
        const profilePhone = document.getElementById("profile-phone");
        const profileCategory = document.getElementById("profile-category");
        const profilePicture = document.getElementById("profile-picture");

        // Update profile with user details
        profileName.textContent = `${userDetails.firstName} ${userDetails.lastName}`;
        profilePhone.textContent = userDetails.phoneNumber;
        profileCategory.textContent = userDetails.category;

        // Update profile picture if available
        if (userDetails.profilePicture) {
            profilePicture.src = userDetails.profilePicture;
        }
    } else {
        // If no user details, redirect to the login page
        window.location.href = "worker-login.html";
    }
});

// Drag-to-Expand Functionality for Service Requests
document.addEventListener('DOMContentLoaded', () => {
    const serviceRequests = document.querySelector('.service-requests');
    const dragHandle = document.querySelector('.drag-handle');
    const viewButton = document.querySelector('.view-button');
  
    let isDragging = false;
    let startY = 0;

    function updateViewButtonVisibility() {
      if (serviceRequests.classList.contains('expanded')) {
        viewButton.style.display = 'none'; // Hide the button
      } else {
        viewButton.style.display = 'block'; // Show the button
      }
    }
  
    dragHandle.addEventListener('mousedown', (e) => {
      isDragging = true;
      startY = e.clientY;
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const offset = startY - e.clientY;
        if (offset > 50) {
          serviceRequests.classList.add('expanded');
          updateViewButtonVisibility(); 
        } else if (offset < -50) {
          serviceRequests.classList.remove('expanded');
          updateViewButtonVisibility();
        }
      }
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  
    // Click-to-Expand Functionality for Service Requests
    viewButton.addEventListener('click', () => {
      serviceRequests.classList.toggle('expanded');
    });
});
