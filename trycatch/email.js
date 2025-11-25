function validateEmail(email){
    try{
        if(!email.includes("@")){
            throw new Error("Invalid email formate");
        }
        console.log("Email is perfect!");
    }catch(error){
        console.log("Validation Error:", error.message);
    }
}
validateEmail("wrongEmailFormate@");