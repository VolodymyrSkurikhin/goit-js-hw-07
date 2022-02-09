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
let instance;
function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return
  };
   
  const bigImgUrl = event.target.dataset.source;
  instance = basicLightbox.create(`
    <img src=${bigImgUrl}>
`, {
    onClose:()=>{ document.removeEventListener('keydown', onEscClose)}
});
  instance.show();
  document.addEventListener('keydown', onEscClose);
  
};
function onEscClose (event) {
  if (event.code === "Escape") {
    instance.close();
    document.removeEventListener('keydown', onEscClose);
    console.log(event.code);
  }
}

console.log(galleryItems);
