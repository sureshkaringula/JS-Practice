let items = [
    {price:220},
    {price:130}
];

let updated = items.map(obj => {
    return {price: obj.price + 25};
});

console.log(updated);