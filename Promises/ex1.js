let p = new Promise((resolve,reject) => {
    resolve("im resolved")
});
p.then( p => console.log(p));