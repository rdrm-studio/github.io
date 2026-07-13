
// Lógica simple para el slider de fondo
const hero = document.getElementById('slider');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let i = 0;

setInterval(() => {
    hero.style.backgroundImage = `url(${images[i]})`;
    i = (i + 1) % images.length;
}, 5000);
