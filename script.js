const images = document.getElementsByClassName("test-image");
console.log("images =>", images);

for (const index of images) {
    index.addEventListener("click", function(event) {
        console.log("test");
    })
}

const items = [
    "images",
    "icons",
    "videos",
    "other stuff"
];