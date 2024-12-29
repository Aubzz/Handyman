const calendarGrid = document.getElementById("calendar-grid");
const monthYearDisplay = document.getElementById("month-year");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const sendRequestButton = document.querySelector(".send-request-button");
const requestModal = document.getElementById("requestModal");

// Generate calendar for the current month
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function generateCalendar(month, year) {
  calendarGrid.innerHTML = "";
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // Add empty cells for days of the previous month
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("empty");
    calendarGrid.appendChild(emptyCell);
  }

  // Add buttons for each day in the current month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayButton = document.createElement("button");
    dayButton.textContent = day;
    dayButton.classList.add("calendar-day-btn");

    // On click, select only one date
    dayButton.onclick = () => {
      document
        .querySelectorAll(".calendar-day-btn")
        .forEach((btn) => btn.classList.remove("active"));
      dayButton.classList.add("active");
    };

    calendarGrid.appendChild(dayButton);
  }

  // Update month-year display
  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
  });
  monthYearDisplay.textContent = `${monthName} ${year}`;
}

// Navigate to the previous month
prevMonthBtn.onclick = () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
};

// Navigate to the next month
nextMonthBtn.onclick = () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
};

// Initialize calendar
generateCalendar(currentMonth, currentYear);

document
  .getElementById("file-attachment")
  .addEventListener("change", (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      console.log(
        `File selected: ${file.name}, Size: ${file.size} bytes, Type: ${file.type}`
      );

      // Example: Validate file size (e.g., max 2MB)
      if (file.size > 100 * 1024 * 1024) {
        alert("File size must not exceed 2MB!");
        event.target.value = ""; // Clear the file input
      }
    }
  });

const fileInput = document.getElementById("file-attachment");
const filePreview = document.getElementById("file-preview");

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  filePreview.innerHTML = ""; // Clear previous preview

  if (file) {
    const fileName = document.createElement("p");
    fileName.textContent = `File: ${file.name}`;

    // Check if the file is an image
    if (file.type.startsWith("image/")) {
      const imgPreview = document.createElement("img");
      imgPreview.src = URL.createObjectURL(file);
      imgPreview.style.maxWidth = "100%";
      imgPreview.style.maxHeight = "150px";
      filePreview.appendChild(imgPreview);
    } else {
      // For non-image files
      const fileInfo = document.createElement("p");
      fileInfo.textContent = `Preview not available for ${file.type}`;
      filePreview.appendChild(fileInfo);
    }

    filePreview.appendChild(fileName);
  } else {
    filePreview.innerHTML = "<p>No file selected.</p>";
  }
});

sendRequestButton.addEventListener("click", () => {
  // Display the modal
  requestModal.style.display = "flex";
});

// Close modal when "Go to Bookings" button is clicked
const confirmButton = document.getElementById("confirmButton");
confirmButton.addEventListener("click", () => {
  // Hide the modal
  requestModal.style.display = "none";
  // Redirect to the bookings page
  location.href = "/dist/users/bookings.html";
});
