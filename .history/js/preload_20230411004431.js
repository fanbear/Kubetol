document.addEventListener("DOMContentLoaded", function () {
    var bgDiv = document.createElement("div");
    bgDiv.className = "preload";

    var targetElement = document.getElementById("main");
    targetElement.insertBefore(bgDiv, targetElement.firstChild);

    window.addEventListener("load", function () {
        document.body.removeChild(bgDiv);
    });
});