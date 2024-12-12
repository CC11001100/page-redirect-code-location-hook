document.getElementById('signLink').addEventListener('click', function (e) {
    e.preventDefault();
    const timestamp = Date.now();
    const sign = md5(timestamp.toString());
    const url = `https://example.com/?sign=${sign}`;
    window.location.href = url;
});