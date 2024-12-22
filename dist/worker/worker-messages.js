// messages.js

// Search functionality
document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const messageThreads = document.querySelectorAll('.message-thread');

    messageThreads.forEach(thread => {
        const name = thread.querySelector('h3').textContent.toLowerCase();
        const message = thread.querySelector('p').textContent.toLowerCase();

        if (name.includes(searchValue) || message.includes(searchValue)) {
            thread.style.display = 'flex';
        } else {
            thread.style.display = 'none';
        }
    });
});

// Floating Action Button (FAB) navigation
document.getElementById('composeButton').addEventListener('click', function () {
    // Redirect to Compose New Message page
    window.location.href = "compose.html";
});

// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Select all message threads
    const messageThreads = document.querySelectorAll('.message-thread');

    // Add click event to each thread
    messageThreads.forEach(thread => {
        thread.addEventListener('click', function () {
            const messageId = this.dataset.id; // Get the data-id of the clicked thread
            console.log(`Thread clicked with ID: ${messageId}`);
            if (messageId) {
                // Redirect to the Full Conversation page with the messageId
                window.location.href = `conversation.html?id=${messageId}`;
            } else {
                console.error('Message ID not found.');
            }
        });
    });
});

