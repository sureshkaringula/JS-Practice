const inventory = [
    {id:1, name:"keyboard", category:"Electronics", quantity:12, price:760},
    {id:2, name:"Mouse", category:"Electronics", quantity:6, price:450},
    {id:3, name:"Notebook" , category:"Stationary", quantity:10, price:110},
    {id:4, name:"Pen Pack", category:"Stationary", quantity:55, price:50},
    {id:5, name:"Stapler", category:"Stationary", quantity:15, price:120},
    {id:6, name:"USB Cable", category:"Electronics", quantity:25, price:150},
    {id:7, name:"HDMI Cable", category:"Electronics", quantity:14, price:300},
    {id:8, name:"Laptop Stand", category:"Electronics", quantity:9, price:890},
    {id:9, name:"Desk Lamp", category:"Electronics", quantity:8, price:650},
    {id:10, name:"A4 Sheets (500)", category:"Stationary", quantity:32, price:320},
    {id:11, name:"Glue Stick", category:"Stationary", quantity:40, price:35},
    {id:12, name:"Calculator", category:"Electronics", quantity:5, price:499},
    {id:13, name:"Whiteboard Marker", category:"Stationary", quantity:22, price:30},
    {id:14, name:"Headphones", category:"Electronics", quantity:4, price:1450},
    {id:15, name:"Pen Drive 32GB", category:"Electronics", quantity:18, price:520},
    {id:16, name:"Sticky Notes", category:"Stationary", quantity:60, price:45},
    {id:17, name:"Scissors", category:"Stationary", quantity:14, price:85},
    {id:18, name:"Monitor Cleaner", category:"Electronics", quantity:7, price:160},
    {id:19, name:"File Folder", category:"Stationary", quantity:72, price:25}
];

function filterInventory(){
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const minPrice = document.getElementById("minPrice").value;
    const maxPrice = document.getElementById("maxPrice").value;
    const lowStock = document.getElementById("lowStock").checked;

    let filtered = inventory.filter(item =>{
       return(
        item.name.toLowerCase().includes(search)&&
        (category === "" || item.category === category) &&
        (minPrice === "" || item.price >= minPrice) &&
        (maxPrice === "" || item.price <= maxPrice)&&
        (!lowStock  || item.quantity < 10)
       );
    });
    renderedTable(filtered)
}
function renderedTable(items){
    const tbody = document.querySelector("#inventoryTable tbody");
    tbody.innerHTML = "";
    items.forEach(item => {
        tbody.innerHTML += `
        <tr>
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        </tr>
        `;
    });
}
renderedTable(inventory);

document.getElementById("searchInput").addEventListener("input", filterInventory);
document.getElementById("categoryFilter").addEventListener("change",filterInventory);
document.getElementById("minPrice").addEventListener("input",filterInventory);
document.getElementById("maxPrice").addEventListener("input",filterInventory);
document.getElementById("lowStock").addEventListener("change",filterInventory);
// document.getElementById("lowStock").addEventListener("change",filterInventory);