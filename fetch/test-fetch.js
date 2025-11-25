import fetch from "node-fetch";

async function test() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log("OUTPUT:", data);
}

test();
