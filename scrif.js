setTimeout(function () {
    alert ("Selamat Datang di Toko Online Kami!");
}, 3000 );

const herotext = document.querySelector("#hero h2");
const colors =["#ff5733", "#33ff57", "#3357ff"];
let colorindex = 0;

function changeherotextcolor(){
    herotext.style.color = colors[colorindex];
    colorindex = (colorindex +1) % colors.length;
}

setInterval(changeherotextcolor, 2000);

let currentImageIndex = 0;
const images = ["img/bg.jpg", "img/hmm.jpeg"];

function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector(
        "#hero"
    ).style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

setInterval (changeHeroImage, 2000)

const productImages = document.querySelectorAll(".product-card img");

productImages.forEach((image) => {
    image.addEventListener("click", () => {
        image.style.transform = "scale(1.5)";
        image.style.transition = "transform 0.5s";
    });
    image.addEventListener("mouseleave", () =>{
        image.style.transform = "scale(1)";
    });
});

document.querySelectorAll(".cta").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Terima Kasih Telah Membeli Produk Ini!");
    });
});