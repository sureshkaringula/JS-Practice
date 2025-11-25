let jsonData = `{bad json}`;

try{
    let user = JSON.parse(jsonData);
    console.log(user.name);
}catch(err){
    console.log("Invalid JSON format");
}finally{
    console.log("Always gives output")
}