let numbers = [12,45,5,8,76,52,1];

let num = numbers.filter(n => n >= 10);
console.log(num);


let people = [
    {name:"suresh",age:21},
    {name:"Akash",age:16},
    {name:"vijay",age:18}
];

let adults = people.filter(p => p.age >= 18);
console.log(adults);


let number = [21,16,22,56,4,17,27,19];

let even = number.filter(n => n%2 === 0);
console.log(even);