import fetch from "node-fetch";

async function addProduct() {
  const products = [
    { name: "Laptop", price: 45000 },
    { name: "Mouse", price: 780 },
    { name: "Charger", price: 2500 }
  ];

  // Create an array of fetch Promises (all run together)
  const promises = products.map(p =>
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(p)
    }).then(res => res.json())
  );

  // Wait for all POSTs to complete
  const results = await Promise.all(promises);

  // Print all outputs
  results.forEach((data, i) => {
    console.log(`Product ${i + 1}:`, data);
  });
}

addProduct();
