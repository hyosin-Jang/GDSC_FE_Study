
var url="img/"
const images = ["3.jpg","4.jpg","5.jpg",
"6.jpg","7.jpg","8.jpg","9.jpg",
"11.jpg","12.jpg","13.jpg","14.jpg","15.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

const main__block=document.querySelector(".main__container");

main__block.appendChild(bgImage);



