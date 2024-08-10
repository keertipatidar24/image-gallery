

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var fullimgdes = document.getElementById("openFullImg-description")
var images = Array.from(document.querySelectorAll(".img-gallery img"));
var currentIndex = 0;

function openFullImg(src) {
    fullImg.src = src;
    fullImgBox.style.display = "flex";
    currentIndex = images.findIndex(img => img.src === src);
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    fullImg.src = images[currentIndex].src;
}

