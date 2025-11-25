let users =[
    {name:"suresh", age:27},
    {name:"Vijay", age:26}
];

let names = users.map(u => u.name);
let ages = users.map(u => u.age);
console.log(names);
console.log(ages);