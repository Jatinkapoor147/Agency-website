if (window.location.pathname.endsWith('.html')) {
    var cleanPath = window.location.pathname.replace('.html', '');
    window.history.replaceState(null, null, cleanPath);
}