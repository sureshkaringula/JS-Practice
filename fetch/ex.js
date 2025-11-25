console.log("Fetching...");

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => console.log("Single user:", data))
  .catch(error => console.log("Error:", error));