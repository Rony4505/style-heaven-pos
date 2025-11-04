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
    loginError.textContent = "❌ ভুল ইউজারনেম বা পাসওয়ার্ড";
  }
};

// Dummy product data
const products = [
  { id: 1, name: "T-Shirt", price: 450 },
  { id: 2, name: "Panjabi", price: 1200 },
  { id: 3, name: "Jeans", price: 950 },
  { id: 4, name: "Saree", price: 2200 },
  { id: 5, name: "Polo Shirt", price: 650 },
  { id: 6, name: "Jacket", price: 1800 },
];

const grid = document.getElementById("productGrid");
const cartList = document.getElementById("cartList");
const totalTk = document.getElementById("totalTk");
const searchInput = document.getElementById("searchInput");
const checkoutBtn = document.getElementById("checkoutBtn");

let cart = [];

// Display products
function displayProducts(items) {
  grid.innerHTML = "";
  items.forEach((p) => {
    const div = document.createElement("div");
    div.textContent = `${p.name}\n৳${p.price}`;
    div.onclick = () => addToCart(p);
    grid.appendChild(div);
  });
}
displayProducts(products);

// Add to cart
function addToCart(p) {
  cart.push(p);
  renderCart();
}

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((p, i) => {
    total += p.price;
    const item = document.createElement("div");
    item.style.display = "flex";
    item.style.justifyContent = "space-between";
    item.innerHTML = `
      <span>${p.name}</span>
      <span>৳${p.price}</span>
      <button class="btn small" onclick="removeItem(${i})">x</button>
    `;
    cartList.appendChild(item);
  });
  totalTk.textContent = total;
}

function removeItem(i) {
  cart.splice(i, 1);
  renderCart();
}

// Search
searchInput.oninput = () => {
  const val = searchInput.value.toLowerCase();
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(val)
  );
  displayProducts(filtered);
};

// Checkout
checkoutBtn.onclick = () => {
  if (cart.length === 0) {
    alert("🛒 কোনো আইটেম নাই কার্টে!");
    return;
  }
  alert("✅ বিক্রি সম্পন্ন!");
  cart = [];
  renderCart();
};
