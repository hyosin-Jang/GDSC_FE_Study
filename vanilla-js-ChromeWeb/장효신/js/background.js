const images = [
    '0.jpeg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg'
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

bgImage = document.querySelector('.img');
console.log(bgImage);
bgImage.style.backgroundImage = `url(img/${chosenImage}`;
//const bgImage = document.getElementById('bg');
//const body = document.querySelector('body');
//console.log(body);
//body.style.backgroundImage = `url(img/${chosenImage}`;
//console.log(body.style.backgroundImage);
//bgImage.src = `img/${chosenImage}`;

//console.log(bgImage);
//document.body.appendChild(bgImage);