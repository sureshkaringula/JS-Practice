try{
    setTimeout(() => {
        throw new Error("Boom!");
    },2000);
}catch(err){
    console.log("Wont catch!" , err.message);
}