function getUser(){
    return new Promise((resolve,reject) => {
        let success = true;

        if(success){
            resolve("User found");
        }else{
            reject("User not found");
        }
    });
}

async function loadUser(){
    try{
        let result = await getUser();
        console.log(result);
    }catch{
        console.log("Error:" ,error);
    }
}
loadUser();
