function login( username,password){
   return new Promise((resolve,reject) => {
    console.log("Checking credentials....");

    setTimeout(() => {
       if(username === "Suresh" && password === "Suresh@17"){
        resolve("Login successful!")
      }else{
        reject("Invalid username or password!")
      }
    },2000);
   });
}
login("Suresh","Suresh@17")
.then(result => console.log("Success:", result))
.catch(err => console.log("Error",err));

// login("admin","wrongpass")
// .then(result => console.log("Success:", result))
// .catch(err => console.log("Error",err));