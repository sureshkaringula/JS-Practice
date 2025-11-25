let promise = new Promise((resolve,reject) => {
    let success = false;

    if(success){
        resolve("Work done!")
    }else{
        reject("Work fail!")
    }
});
 promise
 .then(msg => console.log(msg))
 .catch(msg => console.log(error))
 .finally(msg => console.log("Process completed"))