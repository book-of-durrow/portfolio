const monthToggles = document.querySelectorAll('.month-toggle');

monthToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        const postList = this.nextElementSibling;

        if (postList.classList.contains('show')) {
            postList.classList.remove('show');
            postList.classList.add('hidden');
            setTimeout(() => {
                postList.style.display = 'none';
            }, 200);
        } else {
            document.querySelectorAll('.post-list').forEach(list => {
                list.classList.remove('show');
                list.classList.add('hidden');
                postList.style.display = 'none';
            });

            postList.style.display = 'block';
            postList.classList.remove('hidden');
            postList.classList.add('show');
        }
    });
});
