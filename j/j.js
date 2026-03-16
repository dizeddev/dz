(function () {

    const scriptUrl = document.currentScript.src;
    const params = new URL(scriptUrl).searchParams;
    const id = params.get("id");

    if (!id) return;

    const redirectsSource = "https://cdn.jsdelivr.net/gh/USERNAME/REPO/redirects.json";

    fetch(redirectsSource)
        .then(response => response.json())
        .then(redirects => {

            if (redirects[id]) {
                window.location.href = redirects[id];
            }

        })
        .catch(err => {
            console.error("Redirect list failed to load", err);
        });

})();
