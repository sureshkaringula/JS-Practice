let user={
    name: "Suresh",
    Domain: "Developer",
    age: 27,
    address:{
        city: "Hyderabad",
        pincode: 500032,
    }
};
console.log(user);

let user2=user;
user2.address.city = "TadepalliGudem";
console.log(user.address.city);


