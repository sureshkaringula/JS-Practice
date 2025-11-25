async function createPost() {
  const payload = {
    title: "Hello",
    body: "This is a post",
    userId: 26,
    tags: ["js", "api", "fetch"], 
    comments: [
      { user: "Ram", message: "Nice!" },
      { user: "Kiran", message: "Good job" }
    ]
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  console.log(result);
}

createPost();
