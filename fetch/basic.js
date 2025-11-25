fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response =>{
    if(!response.ok){
        throw new Error("Network response was not ok!" + response.status)
    }else{
        return response.json();
    }
    // return response.json();
})
.then( data => {
console.log("Got data: " + data);
})
.catch( error => {
console.log("Fetch Error: " + error);
});
