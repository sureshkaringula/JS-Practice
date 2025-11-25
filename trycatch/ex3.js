try{
    console.log(myUser);
}catch(err){
    console.log("Error caught: " , err.message);
}

try{
    console.log("A");
    console.log(X);
    console.log("B");
}catch(err){
    console.log("Error caught: " , err.message);
}