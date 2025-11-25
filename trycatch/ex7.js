try{
    try{
        console.log(X);
    }catch(innerError){
        console.log("InnerError:",innerError.message);
        throw new Error("Outer level failure");
    }
}catch(outerError){
    console.log("Outer Error: ", outerError.nessage);
}