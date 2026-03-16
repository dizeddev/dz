(function () {

    // Get parameters from the script URL
    const scriptUrl = document.currentScript.src;
    const params = new URL(scriptUrl).searchParams;
    const id = params.get("id");

    if (!id) return;

    // ID → Redirect map
    const redirects = {
        "123": "https://google.com",
        "1234": "https://gmail.com"
    };

    // Redirect if ID exists
    if (redirects[id]) {
        window.location.href = redirects[id];
    }

})();
