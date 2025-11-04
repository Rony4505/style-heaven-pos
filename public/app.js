<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Style Heaven POS - Dashboard</title>
  <style>
    body {
      margin: 0;
      font-family: "Poppins", sans-serif;
      background-color: #fafafa;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    header {
      background-color: #111;
      color: white;
      padding: 14px;
      text-align: center;
      font-weight: 600;
      font-size: 18px;
    }
    main {
      flex: 1;
      padding: 20px;
      text-align: center;
    }
    button {
      background-color: #ff3b30;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 20px;
    }
    button:hover {
      background-color: #d32f2f;
    }
  </style>
</head>
<body>
  <header>Style Heaven POS</header>
  <main>
    <h2>🛍️ Welcome, Rony!</h2>
    <p>Your POS system is ready.</p>
    <button id="logout">Logout</button>
  </main>

  <script>
    document.getElementById("logout").addEventListener("click", () => {
      window.location.href = "/";
    });
  </script>
</body>
</html>
