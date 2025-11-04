// Simple login system
const loginBox = document.getElementById("loginBox");
const mainApp = document.getElementById("mainApp");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");
const username = document.getElementById("username");
const password = document.getElementById("password");

loginBtn.onclick = () => {
  if (username.value === "admin" && password.value === "1234") {
    loginBox.classList.add("hidden");
    mainApp.classList.remove("hidden");
  } else {
    loginError.textContent = "❌ ভুল ইউজারনেম বা পাসওয়ার্ড!";
  }
};

// Dummy product data
const products = [
  { id: 1, name: "T-Shirt", price: 450 },
  { id: 2, name: "Panjabi", price: 1200 },
  { id: 3, name: "Jeans", price: 980 },
  { id: 4, name: "Polo Shirt", price: 650 },
  { id: 5, name: "Jacket", price: 1800 },
  { id: 6, name: "Saree", price: 2200 },
  { id: 7, name: "Salwar Kameez", price: 1650 },
];

// Product rendering
const productList = document.getElementById("productList");
const billItems = document.getElementById("billItems");
const totalDisplay = document.getElementById("total");
const searchInput = document.getElementById("search");
const logoutBtn = document.getElementById("logout");

let cart = [];

function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach((p) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <h4>${p.name}</h4>
      <p>৳${p.price}</p>
      <button onclick="addToCart(${p.id})">🛒 Add</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  updateBill();
}

function updateBill() {
  billItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ৳${item.price}`;
    billItems.appendChild(li);
    total += item.price;
  });
  totalDisplay.textContent = `Total: ৳${total}`;
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});

logoutBtn.onclick = () => {
  mainApp.classList.add("hidden");
  loginBox.classList.remove("hidden");
  username.value = "";
  password.value = "";
  cart = [];
  updateBill();
};

renderProducts(products);
