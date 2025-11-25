function fetchUser(){
    return new Promise((resolve,reject) => {
        let success = true;

        if(success){
            resolve({id:1517,name:"Suresh"});
        }else{
            reject("Not found user!")
        }
    },1500);
}
fetchUser().then( user => console.log("User:",user))
.catch(err => console.log("Error",err))
.finally(fin => console.log("User ID Active!"));