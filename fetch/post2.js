// async function testURL() {
//   const res = await fetch("https://www.w3.org/TR/PNG/iso_8859-1.txt");

//   console.log("Status:", res.status);
//   console.log("Content-Type:", res.headers.get("content-type"));
//   console.log("Final URL:", res.url);

//   const text = await res.text();
//   console.log(text);
// }

// testURL();


async function getImage() {
  const res = await fetch("https://via.placeholder.com/200");
  const blob = await res.blob();      // binary image data

  const imageURL = URL.createObjectURL(blob);
  const img = document.createElement("img");
  img.src = imageURL;
  document.body.appendChild(img);
}

getImage();
