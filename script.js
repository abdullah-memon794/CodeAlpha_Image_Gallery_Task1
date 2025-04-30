let fullImageBox = document.getElementById("fullImageBox");
let fullImage = document.getElementById("fullImage");
let downloadBtn = document.getElementById("downloadBtn");

function openFullImage(pic) {
    fullImageBox.style.display = "flex";
    fullImage.src = pic;
    downloadBtn.href = pic;
}

function closeFullImage() {
    fullImageBox.style.display = "none";
}

