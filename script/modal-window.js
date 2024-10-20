const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('close');
const modalCaption = document.getElementById('modalCaption');

const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
        modalCaption.innerHTML = this.dataset.description;
    });
});

closeBtn.onclick = function() {
    modal.style.display = 'none';
};

modal.onclick = function() {
    modal.style.display = 'none';
}
