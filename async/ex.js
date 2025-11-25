function getData(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve("Data received"),1000);
    });
}
async function showData(){
    console.log("Waiting for data.......");
    let result = await getData();
    console.log(result);
}
showData();