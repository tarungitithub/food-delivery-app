let cart = [];

fetch("http://localhost:3000/api/restaurants")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("restaurants");
    data.forEach(restaurant => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${restaurant.name}</h3>`;
      restaurant.menu.forEach(item => {
        const btn = document.createElement("button");
        btn.textContent = `${item.item} - ₹${item.price}`;
        btn.onclick = () => {
          cart.push(item);
          alert(`${item.item} added to cart`);
        };
        card.appendChild(btn);
        card.appendChild(document.createElement("br"));
      });
      container.appendChild(card);
    });
    
  });

function placeOrder() {
  fetch("http://localhost:3000/api/order", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cart })
  })
  .then(res => res.json())
  .then(response => {
    alert("Order placed! Order ID: " + response.orderId);
    cart = [];
  });
}
