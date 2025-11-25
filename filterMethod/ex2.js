let names = ["suresh","teja","roy","virat"];

let longNames = names.filter(n => n.length > 4);
console.log(longNames);


let products = ["Laptop", "Keyboard", "Mouse", "Charger"];

let result = products.filter(p => p.toLowerCase().includes("k"));
console.log(result);