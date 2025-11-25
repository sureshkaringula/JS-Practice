let emp = [
    {name:"Suresh",role:"Software Engineer"},
    {name:"Dinesh",role:"Devops"},
    {name:"Purna",role:"backend developer"}
];

let text = emp.map(e => `${e.name} works as ${e.role}`);

console.log(text);