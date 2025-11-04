// Show/hide password toggle
const showPass = document.getElementById("showPass");
const passwordField = document.getElementById("password");

if (showPass && passwordField) {
  showPass.addEventListener("change", () => {
    passwordField.type = showPass.checked ? "text" : "password";
  });
}

// Login form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "app.html";
    } else {
      alert("Invalid username or password!");
    }
  });
}

// Logout button
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  });
}

// Redirect check
if (window.location.pathname.endsWith("app.html")) {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn) {
    window.location.href = "index.html";
  }
}
