import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refs = {
    containerGallery: document.querySelector(".gallery"),
};

const createAllImagesGalleryMarkup = imagesCreateGallery(galleryItems);

function imagesCreateGallery(images) {
    return images.map(({ preview, original, description }) => 
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `).join("");
}

refs.containerGallery.innerHTML = createAllImagesGalleryMarkup;

const gallery = new SimpleLightbox('.gallery a', { 
 captionsData: 'alt',
  captionDelay: 250,
});