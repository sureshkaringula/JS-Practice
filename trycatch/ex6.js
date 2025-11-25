try {
    let data = JSON.parse('{ "name": "John" }'); // invalid JSON format
} catch (error) {
    console.log("JSON Error caught:", error.message);
}


try {
    let data = JSON.parse("{ name: 'John' }"); // invalid JSON format
} catch (error) {
    console.log("JSON Error caught:", error.message);
}
