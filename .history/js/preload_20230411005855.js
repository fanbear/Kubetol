document.addEventListener("DOMContentLoaded", function () {

    let startTime = new Date().getTime();

    // Record the start time when the script loads


    // Attach a load event listener to the window object
    window.addEventListener("load", function () {
        // Calculate the time it took for the page to load
        let endTime = new Date().getTime();
        let loadTime = endTime - startTime;
        if (loadTime < 2000) {
            setTimeout(function () {
                document.querySelector('.preload').classList.add('preload-hover');
            }, 10000)
        }

        // Log the load time to the console
        console.log("Page load time: " + loadTime + " ms");
    });
});