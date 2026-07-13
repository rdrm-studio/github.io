// Lógica para el slider del Hero
const hero = document.getElementById('slider');
const images = ['jose-madero-bestia.png']; 
let i = 0;

if (images.length > 0) {
    hero.style.backgroundImage = `url(${images[0]})`;
    
    setInterval(() => {
        i = (i + 1) % images.length;
        hero.style.backgroundImage = `url(${images[i]})`;
    }, 5000);
}
