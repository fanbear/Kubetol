var bgDiv = document.createElement("div");
bgDiv.style.backgroundImage = "url(path/to/background-image.jpg)";
bgDiv.style.backgroundSize = "cover";
bgDiv.style.backgroundPosition = "center";
bgDiv.style.width = "100%";
bgDiv.style.height = "100%";

bgDiv.onerror = function () {
    console.error("Failed to load background image");
};

document.body.insertBefore(bgDiv, document.body.firstChild);

window.addEventListener("load", function () {
    document.body.removeChild(bgDiv);
});