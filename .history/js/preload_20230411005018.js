document.addEventListener("DOMContentLoaded", function () {
    let bgDiv = document.createElement("div");
    let startTime = new Date().getTime();
    bgDiv.className = "preload";

    let targetElement = document.getElementById("main");
    targetElement.insertBefore(bgDiv, targetElement.firstChild);


    // Record the start time when the script loads


    // Attach a load event listener to the window object
    window.addEventListener("load", function () {
        // Calculate the time it took for the page to load
        let endTime = new Date().getTime();
        let loadTime = endTime - startTime;
        if (loadTime < 2000) {
            setTimeout(function () {
                document.querySelector('preload').classList.add('.preload-hover');
            }, 2000)
        }

        // Log the load time to the console
        console.log("Page load time: " + loadTime + " ms");
    });
});