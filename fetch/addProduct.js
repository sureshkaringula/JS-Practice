import fetch from "node-fetch";

async function addProduct() {

    const products = [
        { name: "Laptop", price: 45000 },
        { name: "Mouse", price: 780 },
        { name: "Charger", price: 2500 }
    ];

    for (let p of products){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(p)
  });

  const data = await res.json();
  console.log("Product:", data);}
  
}
addProduct();
