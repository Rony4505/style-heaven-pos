const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public")); // ফ্রন্টএন্ড ফাইল থাকলে এখান থেকে সার্ভ করবে

app.get("/", (req, res) => {
  res.send("🛍️ Style Heaven POS is running successfully!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
