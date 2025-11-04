const express = require("express");
const path = require("path");
const app = express();

// Render (বা Heroku) এর PORT ব্যবহার করবে, লোকাল হলে 3000
const PORT = process.env.PORT || 3000;

// JSON body পার্স করার জন্য
app.use(express.json());

// 'public' ফোল্ডার থেকে static ফাইল সার্ভ করবে
app.use(express.static(path.join(__dirname, "public")));

// Root রুটে টেস্ট রেসপন্স
app.get("/", (req, res) => {
  res.send("🛍️ Style Heaven POS is running successfully!");
});

// অন্য কোনো রুটে গেলে (যেমন SPA frontend হলে) index.html সার্ভ করবে
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// সার্ভার চালু
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
