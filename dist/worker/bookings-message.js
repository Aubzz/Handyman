document.addEventListener("DOMContentLoaded", () => {
  const sendButton = document.getElementById("sendButton");
  const messageInput = document.getElementById("messageInput");
  const fileUpload = document.getElementById("fileUpload");
  const messagesContainer = document.querySelector(".messages");
  const imagePreview = document.getElementById("imagePreview");
  const previewImg = document.getElementById("previewImg");
  const removePreview = document.getElementById("removePreview");

  // Send button functionality
  sendButton.addEventListener("click", () => {
    const messageText = messageInput.value.trim();
    const previewSrc = previewImg.src;

    if (messageText || previewSrc) {
      // Create a new message div
      const newMessage = document.createElement("div");
      newMessage.classList.add("message", "sent");

      if (messageText) {
        newMessage.textContent = messageText;
      }

      if (previewSrc) {
        const image = document.createElement("img");
        image.src = previewSrc;
        newMessage.appendChild(image);
        imagePreview.style.display = "none"; // Hide image preview after sending
        previewImg.src = "";
      }

      // Append the message to the chatbox
      messagesContainer.prepend(newMessage);

      // Clear the input field
      messageInput.value = "";
    }
  });

  // File upload functionality
  fileUpload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        previewImg.src = event.target.result;
        imagePreview.style.display = "flex"; // Show image preview
      };
      reader.readAsDataURL(file);
    }
  });

  // Remove image preview
  removePreview.addEventListener("click", () => {
    previewImg.src = "";
    imagePreview.style.display = "none";
    fileUpload.value = ""; // Reset file input
  });
});
