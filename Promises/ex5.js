function getData(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Data received from server!");
    },1500);
});
}
getData().then(result => console.log(result));