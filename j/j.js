(function () {

    const scriptUrl = document.currentScript.src;
    const params = new URL(scriptUrl).searchParams;
    const id = params.get("id");

    if (!id) return;

    const redirectsSource = "https://cdn.jsdelivr.net/gh/dizeddev/dz/redirects.json";

    fetch(redirectsSource)
        .then(res => res.json())
        .then(redirects => {

            if (redirects[id]) {
                window.location.href = redirects[id];
            }

        })
        .catch(err => console.error(err));

})();
