// This function will load user details from localStorage and populate the fields
window.onload = function() {
    // Get user details from localStorage
    const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {};

    // Set profile picture
    const profilePhoto = document.getElementById('profile-photo');
    profilePhoto.src = userDetails.profilePicture || "https://img.freepik.com/free-photo/portrait-smiling-man_53876-40306.jpg"; // Default image

    // Set the input fields with current user details
    document.getElementById('first-name').value = userDetails.firstName || "";
    document.getElementById('last-name').value = userDetails.lastName || "";
    document.getElementById('phone').value = userDetails.phoneNumber || "";
    document.getElementById('description').value = userDetails.description || "";

    // Set province (dropdown) with the saved value
    const provinceSelect = document.getElementById('province');
    if (userDetails.province) {
        provinceSelect.value = userDetails.province;
    }

    // Set category (dropdown) with the saved value
    const categorySelect = document.getElementById('category');
    if (userDetails.category) {
        categorySelect.value = userDetails.category;
    }
}

// This function handles profile picture upload
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const profilePhoto = document.getElementById('profile-photo');
        profilePhoto.src = reader.result;  // Update the profile photo preview

        // Save the new profile picture to localStorage
        const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {};
        userDetails.profilePicture = reader.result;
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }

    if (file) {
        reader.readAsDataURL(file);  // Read the file as a data URL
    }
}

// Save updated details to localStorage
function saveChanges() {
    // Get the updated user details from the form fields
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;
    const province = document.getElementById('province').value;
    const category = document.getElementById('category').value;

    const profilePhoto = document.getElementById('profile-photo');
    const profilePicture = profilePhoto.src;

    // Create an object to store the updated details
    const updatedUserDetails = {
        firstName,
        lastName,
        phoneNumber: phone,
        description,
        province,
        category,
        profilePicture: profilePicture
    };

    // Save the updated details to localStorage
    localStorage.setItem("userDetails", JSON.stringify(updatedUserDetails));

    // Quick success alert and redirect after it
    alert('Your changes have been saved successfully!');

    // Redirect to worker-profile.html after the alert
    window.location.href = "worker-profile.html";
}

// Attach saveChanges function to the save button
document.querySelector('.save-button').addEventListener('click', saveChanges);
