function readUser(user){
    try{
        console.log(user.name.toUpperCase());
    }catch(err){
        console.log("User data missing");
    }
    console.log("Done");
}
readUser(null);