const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('close');

const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

closeBtn.onclick = function() {
    modal.style.display = 'none';
};

modal.onclick = function() {
    modal.style.display = 'none';
}
