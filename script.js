const images = document.getElementsByClassName("test-image");
console.log("images =>", images);

for (const image of images) {
    image.addEventListener("click", function(event) {
        console.log("test");
    })
}