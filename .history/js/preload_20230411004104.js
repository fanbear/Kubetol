document.addEventListener("DOMContentLoaded", function () {
    var bgDiv = document.createElement("div");
    bgDiv.style.backgroundColor = "url(img/video-img-2.webp)";
    bgDiv.style.backgroundSize = "cover";
    bgDiv.style.backgroundPosition = "center";
    bgDiv.style.width = "100%";
    bgDiv.style.height = "100%";
    bgDiv.style.top = "0";
    bgDiv.style.right = "0";
    bgDiv.style.bottom = "0";
    bgDiv.style.left = "0";
    bgDiv.style.margin = "0 auto";
    bgDiv.style.zIndex = "9999";
    bgDiv.style.position = "absolute";





    var targetElement = document.getElementById("main");
    targetElement.insertBefore(bgDiv, targetElement.firstChild);
});