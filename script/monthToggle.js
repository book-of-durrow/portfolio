const monthToggles = document.querySelectorAll('.month-toggle');

monthToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        const postList = this.nextElementSibling;

        if (!postList.classList.contains('hidden')) {
            postList.classList.add('hidden');
        } else {
            document.querySelectorAll('.post-list').forEach(list => list.classList.add('hidden'));

            postList.classList.remove('hidden');
        }
    });
});
