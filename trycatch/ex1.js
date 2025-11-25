async function getUser(){
    try{
        let response = await fetch("https://wrong-url.com/user");
        let data = await response.json();
        console.log(data);
    }catch(err){
        console.log("Failed to fetch user data");
        console.log(err.message);
    }
}getUser();