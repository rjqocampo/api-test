const img = document.querySelector("img");
const button = document.querySelector("button");

// function getImage() {
//   fetch(
//     "https://api.giphy.com/v1/gifs/translate?api_key=W42nL55ZnmH1CiIWI0T90IWHuAZ4337U&s=cats",
//     { mode: "cors" }
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       img.src = "";
//       img.src = response.data.images.original.url;
//     });
// }

async function getImage() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=W42nL55ZnmH1CiIWI0T90IWHuAZ4337U&s=cats",
    { mode: "cors" }
  );

  const object = await response.json();

  console.log(object);

  img.src = "";
  img.src = object.data.images.original.url;
}

button.addEventListener("click", getImage);

getImage();
