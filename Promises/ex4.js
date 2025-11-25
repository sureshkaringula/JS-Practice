let promise = new Promise((resolve,reject) => {
    let marks =32;

    if(marks >= 35){
        resolve("You are passed.");
    }else{
        reject("You are failed.");
    }
});
promise.then(msg => console.log("Success:",msg))
       .catch(err => console.log("Error:",err));