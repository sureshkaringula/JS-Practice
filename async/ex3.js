function login(username,password){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(username === "Suresh" && password === "Suresh@17"){
                resolve("Login successful");
            }else{
                reject("Invalid details")
            }
        },2000);
    });
}
async function app(){
   
    try{
       let result = await login("Suresh","Suresh@17");
       console.log(result);
    }catch(err){
        console.log(err)
    }
}
app();