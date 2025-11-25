async function createPost(){
    const payload = [
        {title:"Post-1",body:"Body-1",userId:5,},
        {title:"Post-2",body:"Body-2",userId:6,},
        {title:"Post-3",body:"Body-3",userId:7,},
        {title:"Post-4",body:"Body-4",userId:8,}
    ];

    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{'Content-type': 'application/json'},
        body: JSON.stringify(payload)
    });

    if(!response.ok){
        throw new Error("Server Error:" + response.status);
    }
        const result = await response.json();
        console.log(result);
    }   
createPost();