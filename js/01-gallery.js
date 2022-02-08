import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const createdGallery = galleryItems.map(item => 
  `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/>
  </a></div>`).join('');

galleryRef.innerHTML = createdGallery;

galleryRef.addEventListener('click', onImgClick);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return
  };
   
  const bigImgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src=${bigImgUrl} width="800" height="600">
`)
  instance.show()
};

console.log(galleryItems);
