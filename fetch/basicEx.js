// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => console.log(response.body));

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    console.log("response:",response);
    return response.json();
  })
  .then( date =>{
    console.log('Final data:' , data);
  });