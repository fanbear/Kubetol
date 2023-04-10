document.addEventListener("DOMContentLoaded", function () {
    var bgDiv = document.createElement("div");
    bgDiv.style.backgroundColor = "url(../img/video-img-2.webp)";
    bgDiv.style.backgroundSize = "cover";
    bgDiv.style.backgroundPosition = "center";
    bgDiv.style.width = "100%";
    bgDiv.style.height = "100%";

    var targetElement = document.getElementById("main");
    targetElement.insertBefore(bgDiv, targetElement.firstChild);
});