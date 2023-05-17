// lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const gallery = document.getElementById('gallery-outer');
const overlays = gallery.querySelectorAll('h4');
overlays.forEach(overlay => {
    overlay.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        const image = overlay.parentElement.parentElement.querySelector('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) {
        return;
    } else {
        lightbox.classList.remove('active');
    }
})

document.addEventListener('keydown', e => {
    if (e.which == 27) {
        lightbox.classList.remove('active');
    }
})