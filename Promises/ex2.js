let p = new Promise((resolve,reject) => {
    reject("Something went wrong");
});
p
.then(result => console.log("Success:", result))
.catch(error => console.log("Error",error));