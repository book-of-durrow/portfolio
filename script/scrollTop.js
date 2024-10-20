const scrollToTopButton = document.getElementById('scrollToTop');

scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
