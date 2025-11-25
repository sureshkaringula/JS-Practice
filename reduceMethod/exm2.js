let people = [
  { name: "Suresh", age: 16 },
  { name: "Roy", age: 21 },
  { name: "Kiran", age: 19 }
];

let adultCount = people.reduce((acc, p) => {
    if (p.age >= 18) acc++;
    return acc;
}, 0);

console.log(adultCount);  // 2
