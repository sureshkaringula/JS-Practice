let person = {
    name:"Suresh",
    address:{
        city: "Hyderabad",
        pin: 500032
    }
};

let {name,address:{city}} = person;
console.log(name,city);