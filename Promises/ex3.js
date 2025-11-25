let promise = new Promise((resolve,reject) => {
    console.log("Task Started.....");

    setTimeout(() => {
        resolve("Task finished now.")
    },3000);
});
promise
.then(msg => console.log(msg));