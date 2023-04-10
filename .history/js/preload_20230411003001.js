var bgDiv = document.createElement("div");
bgDiv.style.backgroundColor = "black";
bgDiv.style.backgroundSize = "cover";
bgDiv.style.backgroundPosition = "center";
bgDiv.style.width = "100%";
bgDiv.style.height = "100%";

document.body.insertBefore(bgDiv, document.body.firstChild);

window.addEventListener("load", function () {
    document.body.removeChild(bgDiv);
});