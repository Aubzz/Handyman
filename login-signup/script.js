document.addEventListener("DOMContentLoaded", () => {
  // Constants for form elements
  const signUpForm = document.getElementById("signUpForm");
  const logInForm = document.getElementById("logInForm");

  // Mock storage for users and workers
  const users = [];
  const workers = [];

  // Helper function: Save data locally (mock database simulation)
  function saveData(type, data) {
    if (type === "user") {
      users.push(data);
      alert("User account created successfully!");
    } else if (type === "worker") {
      workers.push(data);
      alert("Worker account created successfully!");
    }
  }
  1;

  // Helper function: Redirect to respective dashboards
  function redirectToDashboard(type) {
    if (type === "user") {
      window.location.href = "/users/home.html"; // User dashboard page
    } else if (type === "worker") {
      window.location.href = "/worker/home-worker.html"; // Worker dashboard page
    }
  }

  // Signup Process
  if (signUpForm) {
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Extract form data
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const province = document.getElementById("province").value.trim();
      const phoneNumber = document.getElementById("phoneNumber").value.trim();
      const commission = document.getElementById("commission").value.trim();
      const password = document.getElementById("password").value.trim();
      const isWorker = document.getElementById("isWorker").checked;

      // Validate form inputs
      if (!firstName || !lastName || !province || !phoneNumber || !password) {
        alert("Please fill in all the required fields.");
        return;
      }

      // Save user or worker data
      const userData = {
        firstName,
        lastName,
        province,
        phoneNumber,
        commission,
        password,
      };

      if (isWorker) {
        saveData("worker", userData);
        redirectToDashboard("worker");
      } else {
        saveData("user", userData);
        redirectToDashboard("user");
      }
    });
  }

  // Login Process
  if (logInForm) {
    logInForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Extract login credentials
      const phoneNumber = document
        .getElementById("loginPhoneNumber")
        .value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      const isWorker = document.getElementById("isWorkerLogin").checked;

      // Validate inputs
      if (!phoneNumber || !password) {
        alert("Please enter your phone number and password.");
        return;
      }

      // Authenticate user
      const accountList = isWorker ? workers : users;
      const account = accountList.find(
        (acc) => acc.phoneNumber === phoneNumber && acc.password === password
      );

      if (account) {
        alert(`Welcome back, ${account.firstName}!`);
        if (isWorker) {
          redirectToDashboard("worker");
        } else {
          redirectToDashboard("user");
        }
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
  }
});
